import { useState } from 'react';
import { ClipboardList, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import type { ChecklistItem } from '../types';

const checklistItems: ChecklistItem[] = [
  {
    id: 1,
    question: '这张图最早出现在哪里？来源可靠吗？',
    tip: '通过反向图片搜索，找到图片在互联网上的最早发布时间和原始出处。注意区分"原发"和"转发"。',
    category: 'source',
  },
  {
    id: 2,
    question: '图中人物、物品、事件的时间线是否合理？',
    tip: '比如图中出现了尚未发布的产品、已经拆除的建筑，或人物的年龄与声称的时间不符。',
    category: 'content',
  },
  {
    id: 3,
    question: '同一事件是否有其他角度的照片或视频佐证？',
    tip: '重大事件通常会有多个目击者拍摄。如果全网只有这一张图，需提高警惕。',
    category: 'source',
  },
  {
    id: 4,
    question: '图中的文字渲染是否过于完美？',
    tip: '当前AI模型（如GPT-Image-2）的文字渲染能力极强，但完美到无可挑剔的文字本身也可能是信号。',
    category: 'content',
  },
  {
    id: 5,
    question: '光影方向是否一致？',
    tip: '观察图中所有光源（太阳、灯光、反光）的方向和强度是否自洽。AI在复杂多光源场景仍可能出错。',
    category: 'content',
  },
  {
    id: 6,
    question: '手指、牙齿、耳朵等细节是否正常？',
    tip: '虽然最新AI已大幅改善，但在多人场景或特殊角度下，肢体细节仍可能出现异常。',
    category: 'content',
  },
  {
    id: 7,
    question: '背景是否有不自然的重复、模糊或扭曲？',
    tip: 'AI生成图片时，背景边缘、反射、纹理有时会出现"拼凑感"或不符合物理规律的变形。',
    category: 'content',
  },
  {
    id: 8,
    question: '这张图的传播路径是什么？谁第一个发的？',
    tip: '追踪图片在社交媒体上的传播链条。首发者的可信度、动机和历史记录都值得考察。',
    category: 'context',
  },
  {
    id: 9,
    question: '发布者是否有利益动机？',
    tip: '考虑发布这张图片能带来什么——流量、情绪煽动、政治目的、商业推广？动机影响可信度。',
    category: 'context',
  },
  {
    id: 10,
    question: '这张图如果为假，对谁会不利？',
    tip: '从反面思考：如果这张图是假的，谁会受到伤害？这种"逆向验证"能帮你发现盲点。',
    category: 'context',
  },
];

const categoryLabels: Record<string, string> = {
  source: '来源验证',
  content: '内容分析',
  context: '上下文判断',
};

const categoryColors: Record<string, string> = {
  source: 'bg-blue-50 text-blue-700 border-blue-200',
  content: 'bg-green-50 text-green-700 border-green-200',
  context: 'bg-purple-50 text-purple-700 border-purple-200',
};

export default function Checklist() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCheck = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((checked.size / checklistItems.length) * 100);

  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-text">自检清单</h3>
        </div>
        <span className="text-sm text-text-secondary">
          已检查 {checked.size} / {checklistItems.length}
        </span>
      </div>

      <div className="w-full bg-surface-alt rounded-full h-2 mb-4">
        <div
          className="bg-accent h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-2">
        {checklistItems.map((item) => {
          const isExpanded = expanded.has(item.id);
          const isChecked = checked.has(item.id);
          const catColor = categoryColors[item.category];

          return (
            <div
              key={item.id}
              className={`border rounded-lg transition ${
                isChecked ? 'border-success/30 bg-success/5' : 'border-border'
              }`}
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-start gap-3 p-3 text-left"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    e.stopPropagation();
                    toggleCheck(item.id);
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-1 w-4 h-4 rounded border-text-muted text-accent focus:ring-accent shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs px-1.5 py-0.5 rounded border ${catColor}`}>
                      {categoryLabels[item.category]}
                    </span>
                    <span className={`text-sm font-medium ${isChecked ? 'line-through text-text-muted' : 'text-text'}`}>
                      {item.question}
                    </span>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                )}
              </button>
              {isExpanded && (
                <div className="px-3 pb-3 pl-10">
                  <div className="flex items-start gap-2 text-sm text-text-secondary">
                    <Lightbulb className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{item.tip}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
