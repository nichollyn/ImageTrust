# NonAIGImageChecker — 工作日志

## 2026-04-23

### 当前状态

MVP 开发完成，构建通过，已提交 git。

### 已完成

- [x] 项目初始化（Vite + React + TS + Tailwind CSS v4）
- [x] 核心组件开发：
  - ImageUploader（拖放/点击上传，纯前端处理）
  - ExifPanel（EXIF元数据解析与展示）
  - ReverseSearchPanel（Google/Yandex/TinEye搜索入口）
  - Checklist（10问自检清单，带进度追踪）
  - CaseCard（案例卡片组件）
- [x] 页面开发：
  - HomePage（上传+验证结果全流程）
  - LearnPage（AI能力边界科普+案例库）
- [x] 静态案例数据（5个真实报道案例）
- [x] git 初始化 + 首次提交
- [x] 项目规范文件（CLAUDE.md, .gitignore）

### 待办

- [ ] 部署到 Vercel
- [ ] 创建 .claude/memory/MEMORY.md
- [ ] 验证移动端响应式
- [ ] 考虑添加更多案例

### 关键决策记录

- **不做Layer 2**：不实现交互式可疑点高亮等AI分析功能，降低复杂度
- **纯前端**：图片不上传服务器，保护隐私，零服务器成本
- **不做判决**：只给工具和方法，不给二元结论，符合产品定位
- **Web优先**：MVP选择Web而非原生App，降低开发和分发成本
