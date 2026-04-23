import { Camera, Calendar, MapPin, Monitor, Ruler, AlertCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import type { ExifData } from '../types';

interface ExifPanelProps {
  exif: ExifData | null;
}

export default function ExifPanel({ exif }: ExifPanelProps) {
  const { t } = useTranslation();

  if (!exif) return null;

  const items = [
    exif.camera && { icon: Camera, label: t('exif.camera'), value: exif.camera },
    exif.lens && { icon: Camera, label: t('exif.lens'), value: exif.lens },
    exif.dateTime && { icon: Calendar, label: t('exif.dateTime'), value: exif.dateTime },
    exif.software && { icon: Monitor, label: t('exif.software'), value: exif.software },
    exif.gps && { icon: MapPin, label: t('exif.location'), value: `${exif.gps.latitude.toFixed(4)}, ${exif.gps.longitude.toFixed(4)}` },
    (exif.width && exif.height) && { icon: Ruler, label: t('exif.dimensions'), value: `${exif.width} × ${exif.height}` },
  ].filter(Boolean) as { icon: React.ElementType; label: string; value: string }[];

  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        {exif.hasExif ? (
          <CheckCircle className="w-5 h-5 text-success" />
        ) : (
          <AlertCircle className="w-5 h-5 text-warning" />
        )}
        <h3 className="font-semibold text-text">{t('exif.title')}</h3>
      </div>

      {items.length > 0 ? (
        <div className="space-y-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-3">
                <Icon className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-secondary">{item.label}</p>
                  <p className="text-sm text-text font-medium">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-4">
          <AlertCircle className="w-8 h-8 text-warning mx-auto mb-2" />
          <p className="text-sm text-text-secondary">{t('exif.noExifTitle')}</p>
          <p className="text-xs text-text-muted mt-1">{t('exif.noExifDesc')}</p>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-border">
        <p className="text-xs text-text-muted leading-relaxed">
          <strong className="text-text-secondary">{t('footer.disclaimer')}</strong>
          {exif.hasExif ? t('exif.hasExifTip') : t('exif.noExifTip')}
        </p>
      </div>
    </div>
  );
}
