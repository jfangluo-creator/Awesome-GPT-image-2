import { useState, useCallback, useRef, useEffect } from 'react';

interface Props {
  onSearch: (query: string) => void;
  total: number;
  filtered: number;
}

export default function SearchBar({ onSearch, total, filtered }: Props) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setQuery(val);
      onSearch(val);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  }, [onSearch]);

  // Keyboard shortcut: / to focus
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && focused) {
        inputRef.current?.blur();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [focused]);

  return (
    <div className="relative w-full max-w-md">
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 ${
          focused
            ? 'border-accent-500 shadow-sm ring-2 ring-accent-500/20'
            : 'border-[var(--color-border)]'
        } bg-[var(--color-surface)]`}
      >
        <svg className="w-4 h-4 opacity-50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="搜索 Prompt、标题..."
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--color-text-secondary)]"
        />
        {query && (
          <button onClick={handleClear} className="p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {!query && !focused && (
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs rounded border border-[var(--color-border)] text-[var(--color-text-secondary)]">
            /
          </kbd>
        )}
      </div>
      {query && (
        <div className="absolute right-0 mt-1 text-xs text-[var(--color-text-secondary)]">
          {filtered} / {total} 个案例
        </div>
      )}
    </div>
  );
}
