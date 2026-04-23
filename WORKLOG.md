# ImageTrust — 工作日志

## 2026-04-23

### 当前状态

MVP 开发完成，已部署至 Vercel（https://image-trust.vercel.app），已提交 git。

### 已完成

- [x] 项目初始化（Vite + React 19 + TS + Tailwind CSS v4）
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
- [x] 多语言本地化（简中/英文/繁中）：
  - LanguageProvider Context + useTranslation Hook
  - 三种语言文件，~120条翻译key
  - Header语言切换器 + localStorage持久化
  - 案例库与AI能力清单完全国际化
- [x] 部署至 Vercel
- [x] git 初始化 + 6次提交
- [x] 项目规范文件（CLAUDE.md, WORKLOG.md, MEMORY.md, .gitignore）

### 待办

- [ ] 验证移动端响应式
- [ ] 考虑添加更多案例
- [ ] 补充案例真实图片（aiImage/realImage字段）
- [ ] 考虑PWA支持
- [ ] 收集用户反馈，验证"思考框架"需求是否真实存在

### 关键决策记录

- **不做Layer 2**：不实现交互式可疑点高亮等AI分析功能，降低复杂度
- **纯前端**：图片不上传服务器，保护隐私，零服务器成本
- **不做判决**：只给工具和方法，不给二元结论，符合产品定位
- **Web优先**：MVP选择Web而非原生App，降低开发和分发成本
- **三语支持**：MVP即支持简中/英文/繁中，覆盖主要目标用户群
