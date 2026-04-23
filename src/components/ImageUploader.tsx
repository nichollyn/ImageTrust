import { useState, useCallback, useRef } from 'react';
import { Upload, X, ImageIcon } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface ImageUploaderProps {
  onImageSelect: (file: File, previewUrl: string) => void;
  onImageClear: () => void;
  previewUrl: string | null;
}

export default function ImageUploader({ onImageSelect, onImageClear, previewUrl }: ImageUploaderProps) {
  const { t } = useTranslation();
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    onImageSelect(file, url);
  }, [onImageSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = '';
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  if (previewUrl) {
    return (
      <div className="relative rounded-xl overflow-hidden border border-border bg-white shadow-sm">
        <img
          src={previewUrl}
          alt="Preview"
          className="w-full max-h-80 object-contain bg-surface-alt"
          draggable
        />
        <button
          onClick={onImageClear}
          className="absolute top-3 right-3 w-8 h-8 bg-primary/80 text-white rounded-full flex items-center justify-center hover:bg-primary transition shadow-lg"
          title={t('uploader.clearImage')}
        >
          <X className="w-4 h-4" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <p className="text-white text-xs">👆 {t('uploader.dragHere')}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`upload-zone cursor-pointer rounded-xl border-2 border-dashed p-10 flex flex-col items-center justify-center gap-3 transition ${
        isDragOver
          ? 'border-accent bg-accent/5'
          : 'border-border bg-white hover:border-text-muted hover:bg-surface-alt'
      }`}
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center transition ${
        isDragOver ? 'bg-accent/10' : 'bg-surface-alt'
      }`}>
        {isDragOver ? (
          <Upload className="w-7 h-7 text-accent" />
        ) : (
          <ImageIcon className="w-7 h-7 text-text-muted" />
        )}
      </div>
      <div className="text-center">
        <p className="text-text font-medium">
          {isDragOver ? t('uploader.dragHint') : t('uploader.clickOrDrag')}
        </p>
        <p className="text-text-secondary text-sm mt-1">
          {t('uploader.supportedFormats')}
        </p>
        <p className="text-text-muted text-xs mt-2">
          ⚡ {t('uploader.localProcessing')}
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
