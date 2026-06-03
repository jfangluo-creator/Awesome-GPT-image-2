import { useEffect, useCallback } from 'react';
import CopyButton from './CopyButton';

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
  emoji: string;
  image: string;
  display: string;
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

interface Props {
  caseData: CaseData | null;
  onClose: () => void;
  imageBase: string;
}

export default function CaseModal({ caseData, onClose, imageBase }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (caseData) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [caseData, handleKeyDown]);

  if (!caseData) return null;

  const imageUrl = `${imageBase}/${encodeImagePath(caseData.display || caseData.image)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--color-surface)] shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-black/5 dark:bg-white/5">
          <img src={imageUrl} alt={caseData.title} className="w-full max-h-[60vh] object-contain" />
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="badge">{caseData.emoji} {caseData.categoryName}</span>
                <span className="text-xs text-[var(--color-text-secondary)]">例 {caseData.id}</span>
              </div>
              {caseData.tags && caseData.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {caseData.tags.map((t) => (
                    <span key={t.slug} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-border)]/50 text-[var(--color-text-secondary)]">
                      {t.name}
                    </span>
                  ))}
                </div>
              )}
              <h2 className="text-xl font-bold mt-1">{caseData.title}</h2>
              {caseData.titleEn && (
                <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{caseData.titleEn}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide">Prompt</h3>
              <CopyButton text={caseData.prompt} />
            </div>
            <pre className="p-4 rounded-xl bg-black/5 dark:bg-white/5 text-sm leading-relaxed whitespace-pre-wrap break-words max-h-64 overflow-y-auto">
              {caseData.prompt}
            </pre>
          </div>

          {(caseData.promptZh || caseData.promptEn) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseData.promptZh && (
                <div>
                  <h4 className="text-xs font-semibold text-[var(--color-text-secondary)] mb-1">🇨🇳 中文</h4>
                  <p className="text-sm leading-relaxed p-3 rounded-lg bg-black/5 dark:bg-white/5 max-h-40 overflow-y-auto">
                    {caseData.promptZh}
                  </p>
                </div>
              )}
              {caseData.promptEn && (
                <div>
                  <h4 className="text-xs font-semibold text-[var(--color-text-secondary)] mb-1">🇬🇧 English</h4>
                  <p className="text-sm leading-relaxed p-3 rounded-lg bg-black/5 dark:bg-white/5 max-h-40 overflow-y-auto">
                    {caseData.promptEn}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] pt-2 border-t border-[var(--color-border)]">
            <span>🔗</span>
            <span>来源：</span>
            {caseData.sourceUrl ? (
              <a href={caseData.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">
                @{caseData.sourceLabel}
              </a>
            ) : (
              <span>{caseData.sourceLabel}</span>
            )}
            {caseData.date && (
              <>
                <span>·</span>
                <span>{caseData.date}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
