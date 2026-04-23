import { Camera, Calendar, MapPin, Monitor, Ruler, AlertCircle, CheckCircle } from 'lucide-react';
import type { ExifData } from '../types';

interface ExifPanelProps {
  exif: ExifData | null;
}

export default function ExifPanel({ exif }: ExifPanelProps) {
  if (!exif) return null;

  const items = [
    exif.camera && { icon: Camera, label: '拍摄设备', value: exif.camera },
    exif.lens && { icon: Camera, label: '镜头', value: exif.lens },
    exif.dateTime && { icon: Calendar, label: '拍摄时间', value: exif.dateTime },
    exif.software && { icon: Monitor, label: '编辑软件', value: exif.software },
    exif.gps && { icon: MapPin, label: '地理位置', value: `${exif.gps.latitude.toFixed(4)}, ${exif.gps.longitude.toFixed(4)}` },
    (exif.width && exif.height) && { icon: Ruler, label: '图片尺寸', value: `${exif.width} × ${exif.height}` },
  ].filter(Boolean) as { icon: React.ElementType; label: string; value: string }[];

  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        {exif.hasExif ? (
          <CheckCircle className="w-5 h-5 text-success" />
        ) : (
          <AlertCircle className="w-5 h-5 text-warning" />
        )}
        <h3 className="font-semibold text-text">EXIF 元数据</h3>
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
          <p className="text-sm text-text-secondary">未检测到 EXIF 元数据</p>
          <p className="text-xs text-text-muted mt-1">
            这可能是因为图片经过社交媒体压缩、截图保存、或被刻意清除
          </p>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-border">
        <p className="text-xs text-text-muted leading-relaxed">
          <strong className="text-text-secondary">提示：</strong>
          {exif.hasExif
            ? '存在 EXIF 数据是真实拍摄的有力证据之一，但不等于绝对真实（EXIF 可被伪造）。'
            : '没有 EXIF 数据 ≠ AI 生成，很多真实图片（如微信保存、截图）也会丢失 EXIF。'}
        </p>
      </div>
    </div>
  );
}
