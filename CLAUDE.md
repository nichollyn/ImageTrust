# ImageTrust 项目规则

## 核心定位

可疑图片自助验证工具箱。不提供"是/否AI生成"的判决，只提供可操作的验证手段和思考框架。

## 技术栈

- Vite 6 + React 19 + TypeScript
- Tailwind CSS v4
- exifreader（纯前端EXIF解析）
- react-router-dom（客户端路由）
- lucide-react（图标）

## 关键约束

1. **纯前端**：不上传图片到任何服务器，所有处理在浏览器本地完成
2. **不做判决**：不给出二元结论，只提供验证工具和建议
3. **不做AI检测**：不运行任何AI模型做真伪判定
4. **低成本**：$0服务器成本，Vercel免费静态托管

## 文件组织

```
src/
  components/    # 可复用组件
  pages/         # 页面级组件
  data/          # 静态数据（案例、清单内容）
  types/         # TypeScript类型定义
  utils/         # 工具函数
```

## 开发规范

- 组件使用默认导出
- 类型定义在 `src/types/index.ts`
- 静态文案内容在 `src/data/` 下
- 颜色使用自定义CSS变量（在 `index.css` 的 `@theme` 中定义）
- 响应式断点：`sm:` (640px), `md:` (768px), `lg:` (1024px)

## 提交规范

- 提交信息说明"为什么"而不仅是"做了什么"
- 重要功能/修复后立即提交
