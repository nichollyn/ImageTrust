import { ExternalLink, Search, Globe, Eye } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import type { TranslationKey } from '../locales';

interface ReverseSearchPanelProps {
  previewUrl: string | null;
}

interface SearchEngine {
  id: string;
  nameKey: string;
  descKey: string;
  url: string;
  icon: React.ElementType;
  color: string;
}

export default function ReverseSearchPanel({ previewUrl }: ReverseSearchPanelProps) {
  const { t } = useTranslation();

  const engines: SearchEngine[] = [
    {
      id: 'google',
      nameKey: 'search.googleName',
      descKey: 'search.googleDesc',
      url: 'https://lens.google.com',
      icon: Search,
      color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
    },
    {
      id: 'yandex',
      nameKey: 'search.yandexName',
      descKey: 'search.yandexDesc',
      url: 'https://yandex.com/images',
      icon: Eye,
      color: 'bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-yellow-100',
    },
    {
      id: 'tineye',
      nameKey: 'search.tineyeName',
      descKey: 'search.tineyeDesc',
      url: 'https://tineye.com',
      icon: Globe,
      color: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-5 h-5 text-accent" />
        <h3 className="font-semibold text-text">{t('search.title')}</h3>
      </div>

      <p className="text-sm text-text-secondary mb-4 leading-relaxed">
        {t('search.description')}
      </p>

      <div className="space-y-3">
        {engines.map((engine) => {
          const Icon = engine.icon;
          return (
            <a
              key={engine.id}
              href={engine.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-3 p-3 rounded-lg border transition group ${engine.color}`}
            >
              <Icon className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm">{t(engine.nameKey as TranslationKey)}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-xs mt-0.5 opacity-80">{t(engine.descKey as TranslationKey)}</p>
              </div>
            </a>
          );
        })}
      </div>

      {previewUrl && (
        <div className="mt-4 p-3 bg-surface-alt rounded-lg border border-border">
          <p className="text-xs text-text-secondary leading-relaxed">
            {t('search.actionTip')}
          </p>
        </div>
      )}
    </div>
  );
}
