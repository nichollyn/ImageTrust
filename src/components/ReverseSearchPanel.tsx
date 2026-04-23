import { ExternalLink, Search, Globe, Eye } from 'lucide-react';

interface ReverseSearchPanelProps {
  previewUrl: string | null;
}

interface SearchEngine {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: React.ElementType;
  color: string;
}

const engines: SearchEngine[] = [
  {
    id: 'google',
    name: 'Google Lens',
    description: '全球最大的图片搜索引擎，索引覆盖最广',
    url: 'https://lens.google.com',
    icon: Search,
    color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
  },
  {
    id: 'yandex',
    name: 'Yandex Images',
    description: '俄罗斯搜索引擎，人脸识别和相似图搜索效果优秀',
    url: 'https://yandex.com/images',
    icon: Eye,
    color: 'bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-yellow-100',
  },
  {
    id: 'tineye',
    name: 'TinEye',
    description: '专注于精确图片匹配，可追踪图片最早出处',
    url: 'https://tineye.com',
    icon: Globe,
    color: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
  },
];

export default function ReverseSearchPanel({ previewUrl }: ReverseSearchPanelProps) {
  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-5 h-5 text-accent" />
        <h3 className="font-semibold text-text">反向图片搜索</h3>
      </div>

      <p className="text-sm text-text-secondary mb-4 leading-relaxed">
        将图片与互联网上的海量图片库比对，查找最早出处、相似图片和传播路径。
        这是验证图片真伪最有效的方法之一。
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
                  <span className="font-semibold text-sm">{engine.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-xs mt-0.5 opacity-80">{engine.description}</p>
              </div>
            </a>
          );
        })}
      </div>

      {previewUrl && (
        <div className="mt-4 p-3 bg-surface-alt rounded-lg border border-border">
          <p className="text-xs text-text-secondary leading-relaxed">
            <strong className="text-text">操作提示：</strong>
            点击上方任意搜索引擎，在新页面中将左侧预览图片拖入搜索框，或点击上传按钮选择同一文件。
            建议同时使用 2-3 个引擎交叉验证。
          </p>
        </div>
      )}
    </div>
  );
}
