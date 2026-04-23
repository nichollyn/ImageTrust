import { useState, useCallback } from 'react';
import { Shield, Info } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import ImageUploader from '../components/ImageUploader';
import ExifPanel from '../components/ExifPanel';
import ReverseSearchPanel from '../components/ReverseSearchPanel';
import Checklist from '../components/Checklist';
import { parseExif } from '../utils/exifParser';
import type { ExifData } from '../types';

export default function HomePage() {
  const { t } = useTranslation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [exif, setExif] = useState<ExifData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = useCallback(async (file: File, url: string) => {
    setPreviewUrl(url);
    setIsLoading(true);
    try {
      const data = await parseExif(file);
      setExif(data);
    } catch {
      setExif({ hasExif: false });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleImageClear = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setExif(null);
  }, [previewUrl]);

  const steps = [
    { title: t('home.step1Title'), desc: t('home.step1Desc') },
    { title: t('home.step2Title'), desc: t('home.step2Desc') },
    { title: t('home.step3Title'), desc: t('home.step3Desc') },
  ];

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-4">
          <Shield className="w-7 h-7 text-accent" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
          {t('home.heroTitle')}
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
          {t('home.heroSubtitle')}
        </p>
      </div>

      {/* Upload */}
      <div className="mb-6">
        <ImageUploader
          onImageSelect={handleImageSelect}
          onImageClear={handleImageClear}
          previewUrl={previewUrl}
        />
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="text-center py-8">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-text-secondary">Parsing image...</p>
        </div>
      )}

      {/* Results */}
      {previewUrl && !isLoading && (
        <>
          <div className="flex items-start gap-2 p-3 bg-info/5 border border-info/20 rounded-lg mb-6">
            <Info className="w-4 h-4 text-info shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary leading-relaxed">
              {t('home.infoBanner')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <ExifPanel exif={exif} />
            <ReverseSearchPanel previewUrl={previewUrl} />
          </div>

          <div className="mb-6">
            <Checklist />
          </div>
        </>
      )}

      {/* Empty state tips */}
      {!previewUrl && (
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {steps.map((step) => (
            <div key={step.title} className="p-4 bg-white rounded-xl border border-border text-center">
              <h4 className="font-semibold text-text mb-1">{step.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
