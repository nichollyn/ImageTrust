# ImageTrust 项目记忆

## 核心组件

| 组件 | 文件 | 职责 |
|------|------|------|
| ImageUploader | `src/components/ImageUploader.tsx` | 图片拖放/点击上传，生成本地预览URL |
| ExifPanel | `src/components/ExifPanel.tsx` | 解析并展示EXIF元数据 |
| ReverseSearchPanel | `src/components/ReverseSearchPanel.tsx` | 提供Google/Yandex/TinEye反向搜索入口 |
| Checklist | `src/components/Checklist.tsx` | 10问自检清单，可勾选，带展开提示 |
| CaseCard | `src/components/CaseCard.tsx` | 案例展示卡片，支持展开识别要点 |

## 已知问题

### 反向搜索的局限
当前无法自动将本地图片传给搜索引擎（浏览器安全限制）。用户需手动在新标签页中上传图片。
**改善方向**：未来可考虑集成图床API，先上传获取公开URL再做反向搜索（但违背"不上传"原则，需权衡）。

### EXIF解析
- exifreader v4.x 的TypeScript类型定义较严格，需要类型断言
- 部分图片（如微信保存、截图）会丢失EXIF，这是正常行为

## 技术债务

- 案例库中的 `aiImage` 和 `realImage` 字段目前为空字符串，未来可补充真实图片
- 没有实现PWA功能（离线访问、添加到主屏幕）

## 知识候选池

- [Tailwind CSS v4] 新版配置方式与v3不同，使用`@import "tailwindcss"`和`@theme`指令
- [exifreader] GPS标签的属性名在不同版本间有变化（GPSLatitude vs Latitude）
