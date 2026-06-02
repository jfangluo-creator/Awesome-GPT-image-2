import { useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import CaseModal from './CaseModal';

/** URL-encode each path segment (preserve / separators) */
function encodeImagePath(path: string): string {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

interface CaseData {
  id: number;
  title: string;
  titleEn: string;
  category: string;
  categoryName: string;
  emoji: string;
  image: string;
  prompt: string;
  promptZh: string;
  promptEn: string;
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

interface Props {
  cases: CaseData[];
  categories: Category[];
  imageBase: string;
}

export default function Gallery({ cases, categories, imageBase }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);

  // Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(cases, {
        keys: [
          { name: 'title', weight: 2 },
          { name: 'titleEn', weight: 1.5 },
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

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((c) => c.category === activeCategory);
    }

    // Search
    if (searchQuery.trim()) {
      const fuseResults = fuse.search(searchQuery.trim());
      const fuseIds = new Set(fuseResults.map((r) => r.item.id));
      // If category is also active, intersect
      result = result.filter((c) => fuseIds.has(c.id));
    }

    return result;
  }, [cases, activeCategory, searchQuery, fuse]);

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
  }, []);

  const handleCaseClick = useCallback((c: CaseData) => {
    setSelectedCase(c);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCase(null);
  }, []);

  return (
    <div>
      {/* Toolbar: filter + search */}
      <div className="sticky top-0 z-30 py-4 space-y-3" style={{ background: 'var(--color-bg)' }}>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
          <SearchBar onSearch={handleSearch} total={cases.length} filtered={filtered.length} />
        </div>
        {/* Results count */}
        {(activeCategory !== 'all' || searchQuery) && (
          <p className="text-sm text-[var(--color-text-secondary)]">
            共 {filtered.length} 个案例
            {activeCategory !== 'all' && ` · ${categories.find((c) => c.slug === activeCategory)?.emoji} ${categories.find((c) => c.slug === activeCategory)?.name}`}
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
              <div className="relative overflow-hidden">
                <img
                  src={`${imageBase}/${encodeImagePath(c.image)}`}
                  alt={c.title}
                  className="w-full h-auto block transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs px-1.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                      {c.emoji} {c.categoryName}
                    </span>
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
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge text-xs">{c.emoji} {c.categoryName}</span>
                  <span className="text-xs text-[var(--color-text-secondary)]">例 {c.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">没有找到匹配的案例</h3>
          <p className="text-[var(--color-text-secondary)] text-sm">
            试试换个关键词或分类？
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 btn-primary text-sm"
          >
            查看全部案例
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedCase && (
        <CaseModal caseData={selectedCase} onClose={handleCloseModal} imageBase={imageBase} />
      )}
    </div>
  );
}
