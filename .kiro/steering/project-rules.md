# 项目技术栈与开发规范

## 技术栈

### 核心框架
- **React 19** - 使用最新版本的 React
- **TypeScript 5.9** - 严格类型检查
- **Vite 7** - 构建工具和开发服务器

### 样式方案
- **Tailwind CSS 4** - 原子化 CSS 框架
- **tw-animate-css** - Tailwind 动画扩展

### UI 组件库
- **shadcn/ui** (radix-vega 风格) - 基于 Radix UI 的组件库
- **Radix UI** - 无障碍原语组件

### 工具库
- **lucide-react** - 图标库
- **class-variance-authority (CVA)** - 组件变体管理
- **clsx** + **tailwind-merge** - 类名合并工具

### 字体
- **Inter Variable** - 可变字体

## 项目结构

```
src/
├── components/
│   └── ui/          # shadcn/ui 组件
├── hooks/           # 自定义 hooks
├── lib/             # 工具函数
├── assets/          # 静态资源
├── App.tsx          # 主应用组件
├── layout.tsx       # 布局组件
├── main.tsx         # 入口文件
└── index.css        # 全局样式
```

## 路径别名

使用 `@/` 作为 `src/` 目录的别名：
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

## 开发规范

### 组件开发
1. 使用函数式组件和 React Hooks
2. 组件文件使用 `.tsx` 扩展名
3. UI 组件放置在 `src/components/ui/` 目录
4. 业务组件放置在 `src/components/` 目录

### 样式规范
1. 优先使用 Tailwind CSS 类名
2. 使用 `cn()` 函数合并类名（来自 `@/lib/utils`）
3. 组件变体使用 CVA 管理
4. 遵循 shadcn/ui 的样式约定

### TypeScript 规范
1. 为所有 props 定义类型接口
2. 使用 `React.ComponentProps<typeof Component>` 扩展原生组件 props
3. 避免使用 `any` 类型

### shadcn/ui 组件使用
1. 通过 `npx shadcn@latest add <component>` 添加新组件
2. 组件会自动安装到 `src/components/ui/` 目录
3. 可以根据需要自定义组件样式

## 命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # 构建生产版本
pnpm lint     # 运行 ESLint 检查
pnpm preview  # 预览生产构建
```

## 包管理器

**强制使用 pnpm** - 禁止使用 npm 或 yarn
- 安装依赖：`pnpm install`
- 添加依赖：`pnpm add <package>`
- 添加开发依赖：`pnpm add -D <package>`

## 组件修改规则

### shadcn/ui 组件 (`src/components/ui/`)
- **禁止手动修改** - 这些组件由 shadcn CLI 自动生成
- 如需更新组件，使用 `pnpm dlx shadcn@latest add <component>` 重新生成
- 样式定制通过 CSS 变量或包装组件实现

### 业务组件 (`src/components/` 非 ui 目录)
- **允许自由修改** - 根据业务需求调整
- 可基于 shadcn/ui 组件进行二次封装

## 注意事项

1. 不使用 React Server Components (RSC)
2. CSS 变量已启用，支持主题定制
3. 图标统一使用 lucide-react
