import { useState } from 'react';
import { ClipboardList, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import type { TranslationKey } from '../locales';

const categoryKeys = {
  source: 'checklist.categorySource',
  content: 'checklist.categoryContent',
  context: 'checklist.categoryContext',
};

const categoryColors: Record<string, string> = {
  source: 'bg-blue-50 text-blue-700 border-blue-200',
  content: 'bg-green-50 text-green-700 border-green-200',
  context: 'bg-purple-50 text-purple-700 border-purple-200',
};

export default function Checklist() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    qKey: `checklist.q${i + 1}` as TranslationKey,
    tipKey: `checklist.q${i + 1}Tip` as TranslationKey,
    category: (['source', 'content', 'context', 'content', 'content', 'content', 'content', 'context', 'context', 'context'] as const)[i],
  }));

  const toggleExpand = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCheck = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((checked.size / items.length) * 100);

  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-text">{t('checklist.title')}</h3>
        </div>
        <span className="text-sm text-text-secondary">
          {t('checklist.progress')} {checked.size} / {items.length}
        </span>
      </div>

      <div className="w-full bg-surface-alt rounded-full h-2 mb-4">
        <div
          className="bg-accent h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-2">
        {items.map((item) => {
          const isExpanded = expanded.has(item.id);
          const isChecked = checked.has(item.id);
          const catColor = categoryColors[item.category];

          return (
            <div
              key={item.id}
              className={`border rounded-lg transition ${
                isChecked ? 'border-success/30 bg-success/5' : 'border-border'
              }`}
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-start gap-3 p-3 text-left"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    e.stopPropagation();
                    toggleCheck(item.id);
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-1 w-4 h-4 rounded border-text-muted text-accent focus:ring-accent shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs px-1.5 py-0.5 rounded border ${catColor}`}>
                      {t(categoryKeys[item.category] as TranslationKey)}
                    </span>
                    <span className={`text-sm font-medium ${isChecked ? 'line-through text-text-muted' : 'text-text'}`}>
                      {t(item.qKey as TranslationKey)}
                    </span>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                )}
              </button>
              {isExpanded && (
                <div className="px-3 pb-3 pl-10">
                  <div className="flex items-start gap-2 text-sm text-text-secondary">
                    <Lightbulb className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{t(item.tipKey)}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
