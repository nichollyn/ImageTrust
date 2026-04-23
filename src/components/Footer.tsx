import { Shield, AlertTriangle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/60 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-start gap-3 mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
          <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">
            <strong className="text-white">重要声明：</strong>
            本工具不提供"是/否AI生成"的判决，仅提供辅助验证手段。AI生成技术正在快速进化，
            任何单一检测方法都可能失效。最终判断请结合多方信息源，保持批判性思维。
          </p>
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-accent" />
            <span>NonAIGImageChecker — 图片公信力自救指南</span>
          </div>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
