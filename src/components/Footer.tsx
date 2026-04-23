import { Shield, AlertTriangle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white/60 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-start gap-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
          <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">
            <strong className="text-white">{t('footer.disclaimer')}</strong>
            {t('footer.disclaimerText')}
          </p>
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-accent" />
            <span>{t('site.brand')} — {t('site.footerClaim')}</span>
          </div>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
