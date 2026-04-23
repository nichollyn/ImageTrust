# ImageTrust 项目记忆

## 核心组件

| 组件 | 文件 | 职责 |
|------|------|------|
| ImageUploader | `src/components/ImageUploader.tsx` | 图片拖放/点击上传，生成本地预览URL |
| ExifPanel | `src/components/ExifPanel.tsx` | 解析并展示EXIF元数据 |
| ReverseSearchPanel | `src/components/ReverseSearchPanel.tsx` | 提供Google/Yandex/TinEye反向搜索入口 |
| Checklist | `src/components/Checklist.tsx` | 10问自检清单，可勾选，带展开提示 |
| CaseCard | `src/components/CaseCard.tsx` | 案例展示卡片，支持展开识别要点 |

## 多语言架构

- **Context**: `src/contexts/LanguageContext.tsx` — 管理当前语言状态，持久化到 localStorage
- **Hook**: `src/hooks/useTranslation.ts` — `t(key)` 翻译函数
- **语言文件**: `src/locales/{zh-CN,en,zh-TW}.ts` — 纯 TS 对象，约 120 条 key
- **类型安全**: `TranslationKey` union 类型，编译时检查 key 存在性
- **切换器**: Header 右上角 hover 下拉菜单
- **动态 html lang**: 切换语言时同步更新 `<html lang>`

## 已知问题

### 反向搜索的局限
当前无法自动将本地图片传给搜索引擎（浏览器安全限制）。用户需手动在新标签页中上传图片。
**改善方向**：未来可考虑集成图床API，先上传获取公开URL再做反向搜索（但违背"不上传"原则，需权衡）。

### EXIF解析
- exifreader v4.x 的TypeScript类型定义较严格，需要类型断言
- 部分图片（如微信保存、截图）会丢失EXIF，这是正常行为

### 网络环境
当前开发环境网络不稳定，curl/fetch 经常超时。GitHub push 和 Vercel 访问偶发失败。

## 技术债务

- 案例库中的 `aiImage` 和 `realImage` 字段目前为空字符串，未来可补充真实图片
- 没有实现PWA功能（离线访问、添加到主屏幕）
- `index.html` 中的 title/meta 是写死的，未根据语言动态更新

## 知识候选池

- [Tailwind CSS v4] 新版配置方式与v3不同，使用`@import "tailwindcss"`和`@theme`指令
- [exifreader] GPS标签的属性名在不同版本间有变化（GPSLatitude vs Latitude）
- [i18n] 小项目自定义 Context + Hook 方案比 react-i18next 更轻量，约零额外依赖
