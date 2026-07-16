import { useState } from 'react';

interface Category {
  slug: string;
  name: string;
  nameEn: string;
  emoji: string;
  count: number;
}

interface Props {
  categories: Category[];
  active: string;
  onChange: (slug: string) => void;
  totalCount?: number;
}

export default function CategoryFilter({ categories, active, onChange, totalCount = 0 }: Props) {
  const [expanded, setExpanded] = useState(false);
  const allItem = { slug: 'all', name: '全部', nameEn: 'All', emoji: '✨', count: totalCount };

  const renderButton = (cat: { slug: string; name: string; emoji: string; count: number }) => {
    const isActive = active === cat.slug;
    return (
      <button
        key={cat.slug}
        onClick={() => onChange(cat.slug)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-accent-500 text-white shadow-md'
            : 'bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-accent-400'
        }`}
      >
        {cat.emoji} {cat.name}
        <span className="ml-1 opacity-60">{cat.count}</span>
      </button>
    );
  };

  return (
    <div>
      {/* Desktop: wrapping flex grid */}
      <div className="hidden sm:flex flex-wrap gap-2">
        {renderButton(allItem)}
        {categories.map(renderButton)}
      </div>

      {/* Mobile: collapsible */}
      <div className="sm:hidden">
        <div className="flex flex-wrap gap-2">
          {renderButton(allItem)}
          {active !== 'all' && renderButton(categories.find(c => c.slug === active) || allItem)}
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-dashed border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-accent-400 transition-all"
          >
            {expanded ? '收起 ▲' : `全部分类 (${categories.length}) ▼`}
          </button>
        </div>
        {expanded && (
          <div className="flex flex-wrap gap-2 mt-2">
            {categories.filter(c => c.slug !== active).map(renderButton)}
          </div>
        )}
      </div>
    </div>
  );
}
