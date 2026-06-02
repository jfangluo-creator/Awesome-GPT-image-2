import type { Dispatch, SetStateAction } from 'react';

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
  onChange: Dispatch<SetStateAction<string>>;
}

export default function CategoryFilter({ categories, active, onChange }: Props) {
  const allItem = { slug: 'all', name: '全部', nameEn: 'All', emoji: '✨', count: 0 };

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onChange('all')}
        className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          active === 'all'
            ? 'bg-accent-500 text-white shadow-md'
            : 'bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-accent-400 dark:bg-[var(--color-surface)]'
        }`}
      >
        {allItem.emoji} {allItem.name}
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(active === cat.slug ? 'all' : cat.slug)}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            active === cat.slug
              ? 'bg-accent-500 text-white shadow-md'
              : 'bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-accent-400 dark:bg-[var(--color-surface)]'
          }`}
        >
          {cat.emoji} {cat.name}
          <span className="ml-1 opacity-60">{cat.count}</span>
        </button>
      ))}
    </div>
  );
}
