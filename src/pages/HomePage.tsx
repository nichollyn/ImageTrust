import { useState, useCallback } from 'react';
import { Shield, Info } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import ExifPanel from '../components/ExifPanel';
import ReverseSearchPanel from '../components/ReverseSearchPanel';
import Checklist from '../components/Checklist';
import { parseExif } from '../utils/exifParser';
import type { ExifData } from '../types';

export default function HomePage() {
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

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-4">
          <Shield className="w-7 h-7 text-accent" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
          可疑图片自助验证工具箱
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
          我们不告诉你"是不是AI生成"。我们给你工具和方法，让你自己判断。
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
          <p className="text-sm text-text-secondary">正在解析图片信息...</p>
        </div>
      )}

      {/* Results */}
      {previewUrl && !isLoading && (
        <>
          {/* Info banner */}
          <div className="flex items-start gap-2 p-3 bg-info/5 border border-info/20 rounded-lg mb-6">
            <Info className="w-4 h-4 text-info shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary leading-relaxed">
              以下信息仅从图片本身的元数据和你的观察角度提供参考。
              <strong className="text-text">没有任何单一指标可以100%判定图片真伪。</strong>
            </p>
          </div>

          {/* Two column layout on desktop */}
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
          {[
            {
              title: '上传图片',
              desc: '拖放或点击选择你想验证的图片，所有处理均在本地完成',
            },
            {
              title: '交叉验证',
              desc: '使用多个反向搜索引擎，查找图片的最早出处和传播路径',
            },
            {
              title: '理性判断',
              desc: '结合EXIF数据、内容逻辑和传播上下文，形成自己的结论',
            },
          ].map((tip) => (
            <div key={tip.title} className="p-4 bg-white rounded-xl border border-border text-center">
              <h4 className="font-semibold text-text mb-1">{tip.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
