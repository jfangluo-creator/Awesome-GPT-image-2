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

  // Helper: resolve tag name
  const tagName = (slug: string) => {
    for (const g of tagGroups) {
      const found = g.tags.find(t => t.slug === slug);
      if (found) return found.name;
    }
    return slug;
  };

  // Single removable tag chip
  const tagChip = (slug: string) => (
    <span
      key={slug}
      className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-accent-500 text-white text-xs cursor-pointer flex-shrink-0"
      onClick={() => onToggleTag(slug)}
    >
      {tagName(slug)}
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );

  return (
    <div>
      {/* === Collapsed: one single row === */}
      {!expanded && (
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
          {hasActive && (
            <button onClick={onClearTags} className="text-xs text-accent-500 hover:underline flex-shrink-0">✕</button>
          )}
          {hasActive && activeTags.map(tagChip)}
          <button
            onClick={() => setExpanded(true)}
            className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)] hover:text-accent-500 transition-colors flex-shrink-0 ml-auto"
          >
            标签
            {hasActive && (
              <span className="w-4 h-4 flex items-center justify-center rounded-full bg-accent-500 text-white text-[10px] leading-none">
                {activeTags.length}
              </span>
            )}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* === Expanded: full panel === */}
      {expanded && (
        <div className="space-y-1.5">
          {hasActive && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <button onClick={onClearTags} className="text-xs text-accent-500 hover:underline">✕ 清除</button>
              {activeTags.map(tagChip)}
            </div>
          )}

          {tagGroups.map((group) => {
            const visibleTags = group.tags.filter(t => availableTags.has(t.slug));
            if (visibleTags.length === 0) return null;
            return (
              <div key={group.slug} className="flex items-start gap-2 flex-wrap">
                <span className="text-xs font-medium text-[var(--color-text-secondary)] mt-0.5 flex-shrink-0 min-w-[3em]">
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
                        {tag.name}<span className="ml-0.5 opacity-60">{tag.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Collapse arrow */}
          <div className="flex justify-end">
            <button
              onClick={() => setExpanded(false)}
              className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)] hover:text-accent-500 transition-colors"
            >
              收起
              <svg className="w-3 h-3 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
