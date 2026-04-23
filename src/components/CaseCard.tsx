import { useState } from 'react';
import { ExternalLink, Tag, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import type { TranslationKey } from '../locales';
import type { CaseItem } from '../types';

interface CaseCardProps {
  caseItem: CaseItem;
}

export default function CaseCard({ caseItem }: CaseCardProps) {
  const { t } = useTranslation();
  const [showClues, setShowClues] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-text text-lg leading-snug">
            {t(caseItem.title as TranslationKey)}
          </h3>
          <span className="text-xs text-text-muted shrink-0 bg-surface-alt px-2 py-1 rounded">
            {caseItem.date}
          </span>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {t(caseItem.description as TranslationKey)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {caseItem.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-primary/5 text-primary-light border border-primary/10"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setShowClues(!showClues)}
          className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover font-medium transition"
        >
          <Lightbulb className="w-4 h-4" />
          {showClues ? t('case.hideClues') : t('case.viewClues')}
          {showClues ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showClues && (
          <div className="mt-3 p-3 bg-warning/5 border border-warning/20 rounded-lg">
            <ul className="space-y-2">
              {caseItem.clues.map((clue, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="w-5 h-5 rounded-full bg-warning/20 text-warning text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                    {idx + 1}
                  </span>
                  {t(clue as TranslationKey)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="px-5 py-3 bg-surface-alt border-t border-border flex items-center justify-between">
        <span className="text-xs text-text-muted">{t('case.source')}：{caseItem.source}</span>
        <a
          href={caseItem.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-hover font-medium transition"
        >
          {t('case.readOriginal')}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
