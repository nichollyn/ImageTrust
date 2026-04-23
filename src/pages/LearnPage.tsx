import { BookOpen, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import CaseCard from '../components/CaseCard';
import { cases, aiCapabilities } from '../data/cases';

export default function LearnPage() {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-4">
          <BookOpen className="w-7 h-7 text-accent" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
          学习识别 AI 生成图片
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
          了解当前AI能做到什么、不能做到什么。用真实案例训练你的判断力。
        </p>
      </div>

      {/* AI Capabilities */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-success" />
            <h2 className="font-semibold text-text">当前AI已能做到</h2>
          </div>
          <ul className="space-y-2.5">
            {aiCapabilities[0].items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-text-muted" />
            <h2 className="font-semibold text-text">当前AI仍可能出错</h2>
          </div>
          <ul className="space-y-2.5">
            {aiCapabilities[1].items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Warning */}
      <div className="flex items-start gap-3 p-4 bg-warning/5 border border-warning/20 rounded-xl mb-10">
        <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-text mb-1">为什么"凭眼力识别"越来越不可靠？</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            2025-2026年，AI图像生成能力经历了代际跃升。GPT-Image-2 等模型在文字渲染、UI还原、照片真实感上已接近或超过人类辨别阈值。
            曾经最有效的识别手段（看手指、看文字乱码、看AI味色调）正在快速失效。
            <strong className="text-text">依赖静态经验判断是危险的，验证方法必须与时俱进。</strong>
          </p>
        </div>
      </div>

      {/* Cases */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-primary mb-2">真实案例库</h2>
        <p className="text-sm text-text-secondary mb-6">
          以下案例均来自公开报道。点击图片下方"阅读原文"查看原始出处。
        </p>
        <div className="space-y-6">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </main>
  );
}
