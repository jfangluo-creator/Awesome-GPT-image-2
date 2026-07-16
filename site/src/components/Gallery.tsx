import { useState, useMemo, useCallback, useEffect, useRef, memo, useLayoutEffect } from 'react';
import Fuse from 'fuse.js';
import CategoryFilter from './CategoryFilter';
import TagFilter from './TagFilter';
import SearchBar from './SearchBar';
import CaseModal from './CaseModal';

/** 统一为 images/...，避免 ../images 拼 BASE_URL 后跳出站点根路径 */
function normalizeImagePath(path: string): string {
  const cleaned = path.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
  if (!cleaned) return cleaned;
  return cleaned.startsWith('images/') || cleaned.startsWith('thumbs/') || cleaned.startsWith('display/')
    ? cleaned
    : `images/${cleaned.replace(/^\/+/, '')}`;
}

/** URL-encode each path segment (preserve / separators) */
function encodeImagePath(path: string): string {
  return normalizeImagePath(path).split('/').map(segment => encodeURIComponent(segment)).join('/');
}

interface Tag {
  slug: string;
  name: string;
  nameEn: string;
  group: string;
}

interface CaseData {
  id: number;
  title: string;
  titleEn: string;
  category: string;
  categoryName: string;
  categoryNameEn: string;
  emoji: string;
  image: string;
  thumb: string;
  display: string;
  blur: string;
  width: number;
  height: number;
  prompt: string;
  promptZh: string;
  promptEn: string;
  tags: Tag[];
  sourceLabel: string;
  sourceUrl: string;
  date: string;
}

interface Category {
  slug: string;
  name: string;
  nameEn: string;
  emoji: string;
  count: number;
}

interface TagItem {
  slug: string;
  name: string;
  nameEn: string;
  count: number;
}

interface TagGroup {
  slug: string;
  name: string;
  nameEn: string;
  tags: TagItem[];
}

interface SlimCase {
  id: number;
  title: string;
  titleEn?: string;
  category: string;
  image: string;
  thumb?: string;
  display?: string;
  blur?: string;
  width?: number;
  height?: number;
  tags: string[];
  sourceLabel?: string;
  sourceUrl?: string;
  date?: string;
}

interface Props {
  categories: Category[];
  tagGroups: TagGroup[];
  imageBase: string;
  listUrl: string;
  totalCases: number;
}

function expandSlimCases(
  slim: SlimCase[],
  categories: Category[],
  tagGroups: TagGroup[]
): CaseData[] {
  const catMap = new Map(categories.map((c) => [c.slug, c]));
  const tagMap = new Map<string, Tag>();
  for (const g of tagGroups) {
    for (const t of g.tags) {
      tagMap.set(t.slug, { slug: t.slug, name: t.name, nameEn: t.nameEn, group: g.slug });
    }
  }

  return slim.map((c) => {
    const cat = catMap.get(c.category);
    return {
      id: c.id,
      title: c.title,
      titleEn: c.titleEn || '',
      category: c.category,
      categoryName: cat?.name || c.category,
      categoryNameEn: cat?.nameEn || '',
      emoji: cat?.emoji || '🎨',
      image: c.image,
      thumb: c.thumb || '',
      display: c.display || '',
      blur: c.blur || '',
      width: c.width || 0,
      height: c.height || 0,
      prompt: '',
      promptZh: '',
      promptEn: '',
      tags: (c.tags || [])
        .map((slug) => tagMap.get(slug))
        .filter((t): t is Tag => Boolean(t)),
      sourceLabel: c.sourceLabel || '',
      sourceUrl: c.sourceUrl || '',
      date: c.date || '',
    };
  });
}

// ─── Memoized Card Component ──────────────────────────────
interface CardProps {
  c: CaseData;
  imageBase: string;
  priority: boolean;
  onClick: (c: CaseData) => void;
}

const CaseCard = memo(function CaseCard({ c, imageBase, priority, onClick }: CardProps) {
  const thumbSrc = c.thumb ? `${imageBase}/${encodeImagePath(c.thumb)}` : '';
  const originalSrc = `${imageBase}/${encodeImagePath(c.image)}`;
  const [imgSrc, setImgSrc] = useState(thumbSrc || originalSrc);
  const [imgFailed, setImgFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const hasBlur = Boolean(c.blur);
  // 始终预留宽高比，避免图片加载后撑开布局（无尺寸时用 3:4）
  const aspectRatio = c.width && c.height ? `${c.width} / ${c.height}` : '3 / 4';

  // 案例数据变化时重置
  useEffect(() => {
    setImgSrc(thumbSrc || originalSrc);
    setImgFailed(false);
    setLoaded(false);
  }, [thumbSrc, originalSrc]);

  // 缓存命中时 onLoad 可能不触发，导致一直 opacity:0 白屏
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [imgSrc]);

  const handleError = () => {
    if (imgSrc !== originalSrc && originalSrc) {
      setImgSrc(originalSrc);
      setLoaded(false);
      return;
    }
    setImgFailed(true);
  };

  return (
    <div
      className="card cursor-pointer"
      onClick={() => onClick(c)}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio,
          backgroundImage: c.blur ? `url(${c.blur})` : undefined,
          backgroundSize: 'cover',
          backgroundColor: 'color-mix(in srgb, var(--color-text-secondary) 18%, var(--color-surface))',
        }}
      >
        {!imgFailed ? (
          <img
            ref={imgRef}
            src={imgSrc}
            alt={c.title}
            width={c.width || undefined}
            height={c.height || undefined}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: hasBlur && !loaded ? 0 : 1 }}
            decoding="async"
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={() => setLoaded(true)}
            onError={handleError}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-3 text-center">
            <span className="text-2xl opacity-40">{c.emoji || '🖼️'}</span>
            <span className="text-xs text-[var(--color-text-secondary)]">图片暂缺</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <div className="flex items-center flex-wrap gap-1.5 mb-1">
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
              {c.emoji} {c.categoryName}
            </span>
            {c.tags.slice(0, 4).map((t) => (
              <span key={t.slug} className="text-xs px-1.5 py-0.5 rounded bg-white/15 text-white/80 backdrop-blur-sm">
                {t.name}
              </span>
            ))}
          </div>
          <p className="text-white text-sm font-medium line-clamp-2">
            {c.promptZh || c.prompt.substring(0, 80)}
          </p>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-1">{c.title}</h3>
        {c.titleEn && (
          <p className="text-xs text-[var(--color-text-secondary)] line-clamp-1 mt-0.5">
            {c.titleEn}
          </p>
        )}
        <div className="flex items-center flex-wrap gap-1 mt-2">
          <span className="badge text-xs">{c.emoji} {c.categoryName}</span>
          {c.tags.slice(0, 4).map((t) => (
            <span key={t.slug} className="text-xs px-1.5 py-0.5 rounded bg-[var(--color-border)]/50 text-[var(--color-text-secondary)]">
              {t.name}
            </span>
          ))}
          <span className="text-xs text-[var(--color-text-secondary)] opacity-60">例 {c.id}</span>
        </div>
      </div>
    </div>
  );
});

// ─── Main Gallery ─────────────────────────────────────────
const BATCH_SIZE = 60;

function useColumnCount() {
  const [cols, setCols] = useState(2);
  useEffect(() => {
    const mq = [
      { q: '(min-width: 1280px)', n: 5 },
      { q: '(min-width: 1024px)', n: 4 },
      { q: '(min-width: 768px)', n: 3 },
    ] as const;
    const apply = () => {
      for (const { q, n } of mq) {
        if (window.matchMedia(q).matches) {
          setCols(n);
          return;
        }
      }
      setCols(2);
    };
    apply();
    const mqls = mq.map(({ q }) => window.matchMedia(q));
    mqls.forEach((m) => m.addEventListener('change', apply));
    return () => mqls.forEach((m) => m.removeEventListener('change', apply));
  }, []);
  return cols;
}

/** 轮询分列：追加加载时已出现的卡片留在原列，避免 CSS columns 整页重排抖动 */
function splitIntoColumns(items: CaseData[], colCount: number): CaseData[][] {
  const cols: CaseData[][] = Array.from({ length: colCount }, () => []);
  items.forEach((c, i) => {
    cols[i % colCount].push(c);
  });
  return cols;
}

export default function Gallery({ categories, tagGroups, imageBase, listUrl, totalCases }: Props) {
  const [cases, setCases] = useState<CaseData[]>([]);
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const columnCount = useColumnCount();

  const toolbarRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const header = document.querySelector('header');
    if (!header || !toolbarRef.current) return;
    const apply = () => {
      if (toolbarRef.current) {
        toolbarRef.current.style.top = header.offsetHeight + 'px';
      }
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoadState('loading');

    (async () => {
      try {
        const r = await fetch(listUrl);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data = (await r.json()) as { cases: SlimCase[] };
        if (cancelled) return;
        const expanded = expandSlimCases(data.cases || [], categories, tagGroups);
        expanded.sort((a, b) => b.id - a.id);
        if (cancelled) return;
        setCases(expanded);
        setLoadState('ready');
      } catch (err) {
        console.error('Failed to load cases-list.json', err);
        if (!cancelled) setLoadState('error');
      }
    })();

    return () => {
      cancelled = true;
    };
    // categories/tagGroups 来自 island 静态 props，勿放入 deps，避免引用变化导致反复 cancel
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listUrl]);

  const orderedCases = cases;

  const fuse = useMemo(
    () =>
      new Fuse(orderedCases, {
        keys: [
          { name: 'title', weight: 2 },
          { name: 'titleEn', weight: 1.5 },
          { name: 'tags.name', weight: 1.2 },
          { name: 'tags.nameEn', weight: 1.2 },
          { name: 'prompt', weight: 1 },
          { name: 'promptZh', weight: 1 },
          { name: 'promptEn', weight: 1 },
          { name: 'categoryName', weight: 0.5 },
        ],
        threshold: 0.4,
        includeScore: true,
      }),
    [orderedCases]
  );

  const filtered = useMemo(() => {
    let result = orderedCases;

    if (activeCategory !== 'all') {
      result = result.filter((c) => c.category === activeCategory);
    }

    if (activeTags.length > 0) {
      result = result.filter((c) =>
        activeTags.every((tag) => c.tags.some((t) => t.slug === tag))
      );
    }

    if (searchQuery.trim()) {
      const fuseResults = fuse.search(searchQuery.trim());
      const fuseIds = new Set(fuseResults.map((r) => r.item.id));
      result = result.filter((c) => fuseIds.has(c.id));
    }

    return result;
  }, [orderedCases, activeCategory, activeTags, searchQuery, fuse]);

  const availableTags = useMemo(() => {
    const categoryCases = activeCategory !== 'all'
      ? orderedCases.filter((c) => c.category === activeCategory)
      : orderedCases;
    const slugs = new Set<string>();
    for (const c of categoryCases) {
      for (const t of c.tags) {
        slugs.add(t.slug);
      }
    }
    return slugs;
  }, [orderedCases, activeCategory]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const columns = useMemo(
    () => splitIntoColumns(visible, columnCount),
    [visible, columnCount]
  );

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || visibleCount >= filtered.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((n) => Math.min(n + BATCH_SIZE, filtered.length));
        }
      },
      { rootMargin: '600px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length, visibleCount]);

  /** 筛选变更后滚回顶部，避免仍停在上一屏的滚动位置 */
  const resetListView = useCallback(() => {
    setVisibleCount(BATCH_SIZE);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }, []);

  const handleToggleTag = useCallback((slug: string) => {
    setActiveTags((prev) =>
      prev.includes(slug) ? prev.filter((t) => t !== slug) : [...prev, slug]
    );
    resetListView();
  }, [resetListView]);

  const handleClearTags = useCallback(() => {
    setActiveTags([]);
    resetListView();
  }, [resetListView]);

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
    resetListView();
  }, [resetListView]);

  const handleCategoryChange = useCallback((c: string) => {
    setActiveCategory(c);
    resetListView();
  }, [resetListView]);

  const handleCaseClick = useCallback((c: CaseData) => {
    setSelectedCase(c);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCase(null);
  }, []);

  const activeTagNames = useMemo(() => {
    const nameMap = new Map<string, string>();
    for (const g of tagGroups) {
      for (const t of g.tags) {
        nameMap.set(t.slug, t.name);
      }
    }
    return activeTags.map((slug) => nameMap.get(slug) || slug);
  }, [activeTags, tagGroups]);

  const hasMore = visibleCount < filtered.length;

  if (loadState === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-[var(--color-text-secondary)]">
        <p className="text-sm">加载案例中…</p>
        <p className="text-xs mt-2 opacity-60">共 {totalCases} 个</p>
      </div>
    );
  }

  if (loadState === 'error') {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h3 className="text-lg font-semibold mb-2">案例列表加载失败</h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">请刷新页面重试</p>
        <button className="btn-primary text-sm" onClick={() => window.location.reload()}>
          刷新
        </button>
      </div>
    );
  }

  return (
    <div>
      <div ref={toolbarRef} className="sticky z-30 py-4 space-y-3" style={{ top: 53, background: 'var(--color-bg)' }}>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={handleCategoryChange}
            totalCount={orderedCases.length || totalCases}
          />
          <SearchBar onSearch={handleSearch} total={orderedCases.length} filtered={filtered.length} />
        </div>

        <TagFilter
          tagGroups={tagGroups}
          activeTags={activeTags}
          onToggleTag={handleToggleTag}
          onClearTags={handleClearTags}
          availableTags={availableTags}
        />

        {(activeCategory !== 'all' || activeTags.length > 0 || searchQuery) && (
          <p className="text-sm text-[var(--color-text-secondary)]">
            {filtered.length} / {orderedCases.length} 个案例
            {activeCategory !== 'all' && ` · ${categories.find((c) => c.slug === activeCategory)?.emoji} ${categories.find((c) => c.slug === activeCategory)?.name}`}
            {activeTags.length > 0 && ` · ${activeTagNames.join(' + ')}`}
            {searchQuery && ` · 搜索"${searchQuery}"`}
          </p>
        )}
      </div>

      {filtered.length > 0 ? (
        <>
          <div className="masonry-cols mt-4">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="masonry-col">
                {col.map((c, rowIndex) => (
                  <CaseCard
                    key={c.id}
                    c={c}
                    imageBase={imageBase}
                    priority={rowIndex < 3}
                    onClick={handleCaseClick}
                  />
                ))}
              </div>
            ))}
          </div>
          {hasMore && (
            <div ref={sentinelRef} className="flex justify-center py-8">
              <p className="text-sm text-[var(--color-text-secondary)]">
                已显示 {visibleCount} / {filtered.length} · 继续滚动加载
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">没有找到匹配的案例</h3>
          <p className="text-[var(--color-text-secondary)] text-sm">试试换个关键词或分类？</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setActiveTags([]);
              setSearchQuery('');
              resetListView();
            }}
            className="mt-4 btn-primary text-sm"
          >
            查看全部案例
          </button>
        </div>
      )}

      {selectedCase && (
        <CaseModal caseData={selectedCase} onClose={handleCloseModal} imageBase={imageBase} />
      )}
    </div>
  );
}
