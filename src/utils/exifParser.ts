import ExifReader from 'exifreader';
import type { ExifData } from '../types';

function getImageDimensions(file: File): Promise<{ width: number; height: number } | undefined> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => {
      resolve(undefined);
      URL.revokeObjectURL(img.src);
    };
    img.src = URL.createObjectURL(file);
  });
}

export async function parseExif(file: File): Promise<ExifData> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const tags = await ExifReader.load(arrayBuffer, { expanded: true });

    const exif = (tags.exif || {}) as Record<string, { description: string; value: unknown }>;
    const gps = (tags.gps || {}) as Record<string, { description: string; value: unknown }>;

    const camera = exif['Make'] && exif['Model']
      ? `${exif['Make'].description} ${exif['Model'].description}`
      : exif['Make']?.description || exif['Model']?.description || undefined;

    const lens = exif['LensModel']?.description || undefined;
    const dateTime = exif['DateTime']?.description || exif['DateTimeOriginal']?.description || undefined;
    const software = exif['Software']?.description || undefined;
    const orientation = exif['Orientation']?.value as number | undefined;

    const dims = await getImageDimensions(file);
    const width = dims?.width;
    const height = dims?.height;

    let gpsData: ExifData['gps'] = undefined;
    const latVal = gps['GPSLatitude']?.value ?? gps['Latitude']?.value;
    const lngVal = gps['GPSLongitude']?.value ?? gps['Longitude']?.value;
    const latRef = gps['GPSLatitudeRef']?.description ?? gps['LatitudeRef']?.description;
    const lngRef = gps['GPSLongitudeRef']?.description ?? gps['LongitudeRef']?.description;

    if (latVal && lngVal && Array.isArray(latVal) && Array.isArray(lngVal)) {
      const lat = convertGpsCoordinate(latVal, latRef);
      const lng = convertGpsCoordinate(lngVal, lngRef);
      if (lat !== null && lng !== null) {
        gpsData = { latitude: lat, longitude: lng };
      }
    }

    const hasExif = Object.keys(exif).length > 0 || Object.keys(gps).length > 0;

    return {
      camera,
      lens,
      dateTime,
      software,
      gps: gpsData,
      width,
      height,
      orientation,
      hasExif,
      raw: tags as unknown as Record<string, unknown>,
    };
  } catch {
    return { hasExif: false };
  }
}

function convertGpsCoordinate(values: unknown[], ref?: string): number | null {
  if (!Array.isArray(values) || values.length < 3) return null;
  const deg = Number(values[0]) || 0;
  const min = Number(values[1]) || 0;
  const sec = Number(values[2]) || 0;
  let coord = deg + min / 60 + sec / 3600;
  if (ref === 'S' || ref === 'W') coord = -coord;
  return coord;
}
