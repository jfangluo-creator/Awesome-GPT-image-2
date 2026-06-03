import { useState } from 'react';

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
  tagGroups: TagGroup[];
  activeTags: string[];
  onToggleTag: (slug: string) => void;
  onClearTags: () => void;
  availableTags: Set<string>;
}

export default function TagFilter({
  tagGroups,
  activeTags,
  onToggleTag,
  onClearTags,
  availableTags,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const hasActive = activeTags.length > 0;

  return (
    <div className="space-y-2">
      {/* Mobile toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="sm:hidden flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
      >
        <svg
          className={`w-4 h-4 transition-transform ${expanded ? 'rotate-90' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>筛选标签</span>
        {hasActive && (
          <span className="px-1.5 py-0.5 rounded-full bg-accent-500 text-white text-xs">
            {activeTags.length}
          </span>
        )}
      </button>

      {/* Tag content */}
      <div className={`${expanded ? 'block' : 'hidden'} sm:block space-y-2`}>
        {hasActive && (
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={onClearTags} className="text-xs text-accent-500 hover:underline">✕ 清除标签</button>
            {activeTags.map((slug) => {
              let name = slug;
              for (const g of tagGroups) {
                const found = g.tags.find(t => t.slug === slug);
                if (found) { name = found.name; break; }
              }
              return (
                <span
                  key={slug}
                  className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-accent-500 text-white text-xs cursor-pointer"
                  onClick={() => onToggleTag(slug)}
                >
                  {name}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              );
            })}
          </div>
        )}

        {tagGroups.map((group) => {
          const visibleTags = group.tags.filter(t => availableTags.has(t.slug));
          if (visibleTags.length === 0) return null;
          return (
            <div key={group.slug} className="flex items-start gap-2 flex-wrap">
              <span className="text-xs font-medium text-[var(--color-text-secondary)] mt-1 flex-shrink-0 min-w-[3em]">
                {group.name}
              </span>
              <div className="flex flex-wrap gap-1">
                {visibleTags.map((tag) => {
                  const isActive = activeTags.includes(tag.slug);
                  return (
                    <button
                      key={tag.slug}
                      onClick={() => onToggleTag(tag.slug)}
                      className={`px-2 py-0.5 rounded-full text-xs transition-all duration-150 ${
                        isActive
                          ? 'bg-accent-500 text-white shadow-sm'
                          : 'bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-accent-400 text-[var(--color-text-secondary)]'
                      }`}
                    >
                      {tag.name}
                      <span className="ml-0.5 opacity-60">{tag.count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
