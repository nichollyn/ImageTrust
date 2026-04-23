import { Link, useLocation } from 'react-router-dom';
import { Shield, BookOpen, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { localeConfigs } from '../locales';
import type { Locale } from '../locales';

export default function Header() {
  const location = useLocation();
  const { t, locale, setLocale } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.verify'), icon: Shield },
    { path: '/learn', label: t('nav.learn'), icon: BookOpen },
  ];

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg hover:opacity-90 transition">
          <Shield className="w-5 h-5 text-accent" />
          <span>{t('site.brand')}</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-accent/20 text-accent'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{localeConfigs[locale].label}</span>
            </button>
            <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-border overflow-hidden hidden group-hover:block min-w-[120px]">
              {(Object.keys(localeConfigs) as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`w-full text-left px-4 py-2 text-sm transition ${
                    l === locale
                      ? 'bg-accent/10 text-accent font-medium'
                      : 'text-text hover:bg-surface-alt'
                  }`}
                >
                  {localeConfigs[l].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
