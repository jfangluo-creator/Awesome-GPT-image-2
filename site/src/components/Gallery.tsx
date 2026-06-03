import { useState, useMemo, useCallback, useEffect } from 'react';
import Fuse from 'fuse.js';
import CategoryFilter from './CategoryFilter';
import TagFilter from './TagFilter';
import SearchBar from './SearchBar';
import CaseModal from './CaseModal';

/** URL-encode each path segment (preserve / separators) */
function encodeImagePath(path: string): string {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
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

interface Props {
  cases: CaseData[];
  categories: Category[];
  tagGroups: TagGroup[];
  imageBase: string;
}

export default function Gallery({ cases, categories, tagGroups, imageBase }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);

  // Measure header height so toolbar sticks below it
  const [headerH, setHeaderH] = useState(53);
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) setHeaderH(header.offsetHeight);
  }, []);

  // Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(cases, {
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
    [cases]
  );

  // Filter & search
  const filtered = useMemo(() => {
    let result = cases;

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
  }, [cases, activeCategory, activeTags, searchQuery, fuse]);

  // Compute available tags for current category
  const availableTags = useMemo(() => {
    const categoryCases = activeCategory !== 'all'
      ? cases.filter((c) => c.category === activeCategory)
      : cases;
    const slugs = new Set<string>();
    for (const c of categoryCases) {
      for (const t of c.tags) {
        slugs.add(t.slug);
      }
    }
    return slugs;
  }, [cases, activeCategory]);

  const handleToggleTag = useCallback((slug: string) => {
    setActiveTags((prev) =>
      prev.includes(slug) ? prev.filter((t) => t !== slug) : [...prev, slug]
    );
  }, []);

  const handleClearTags = useCallback(() => {
    setActiveTags([]);
  }, []);

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
  }, []);

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

  return (
    <div>
      {/* Toolbar: filter + search */}
      <div className="sticky z-30 py-4 space-y-3" style={{ top: headerH, background: 'var(--color-bg)' }}>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
          <SearchBar onSearch={handleSearch} total={cases.length} filtered={filtered.length} />
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
            {filtered.length} / {cases.length} 个案例
            {activeCategory !== 'all' && ` · ${categories.find((c) => c.slug === activeCategory)?.emoji} ${categories.find((c) => c.slug === activeCategory)?.name}`}
            {activeTags.length > 0 && ` · ${activeTagNames.join(' + ')}`}
            {searchQuery && ` · 搜索"${searchQuery}"`}
          </p>
        )}
      </div>

      {/* Masonry Grid */}
      {filtered.length > 0 ? (
        <div className="masonry mt-4">
          {filtered.map((c, i) => (
            <div
              key={c.id}
              className="masonry-item card cursor-pointer animate-fade-in"
              style={{ animationDelay: `${Math.min(i * 30, 600)}ms`, opacity: 0 }}
              onClick={() => handleCaseClick(c)}
            >
              <div className="relative overflow-hidden" style={{
                backgroundImage: c.blur ? `url(${c.blur})` : undefined,
                backgroundSize: 'cover',
                ...(c.width && c.height ? { aspectRatio: `${c.width} / ${c.height}` } : {}),
              }}>
                <img
                  src={`${imageBase}/${encodeImagePath(c.thumb || c.image)}`}
                  alt={c.title}
                  width={c.width}
                  height={c.height}
                  className="w-full h-auto block transition-transform duration-500 hover:scale-105"
                  loading={i < 6 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={i < 6 ? 'high' : undefined}
                />
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
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">没有找到匹配的案例</h3>
          <p className="text-[var(--color-text-secondary)] text-sm">试试换个关键词或分类？</p>
          <button
            onClick={() => { setActiveCategory('all'); setActiveTags([]); setSearchQuery(''); }}
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
