export interface ExifData {
  camera?: string;
  lens?: string;
  dateTime?: string;
  software?: string;
  gps?: {
    latitude: number;
    longitude: number;
  };
  width?: number;
  height?: number;
  orientation?: number;
  hasExif: boolean;
  raw?: Record<string, unknown>;
}

export interface ChecklistItem {
  id: number;
  question: string;
  tip: string;
  category: 'source' | 'content' | 'context';
}

export interface CaseItem {
  id: string;
  title: string;
  description: string;
  aiImage: string;
  realImage?: string;
  source: string;
  sourceUrl: string;
  date: string;
  tags: string[];
  clues: string[];
}
