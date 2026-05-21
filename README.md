# 企业级知识库管理系统

一个面向地域-系统-模块-应用层级结构的企业级知识库管理系统，通过 AI 自动分析代码生成结构化知识文档，支持知识图谱可视化和团队协作审批流程。

## 核心特性

- 📊 **知识层级管理**：地域-系统-模块-应用四级知识组织
- 🤖 **智能知识生成**：代码解析自动生成工程文档
- 🔍 **知识图谱**：代码、接口、测试、运维四类图谱可视化
- 👥 **协作与审批**：团队协作编辑、知识审核流程
- 🔎 **混合检索**：全文搜索 + 语义检索 + 智能推荐

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **状态管理**：Zustand
- **路由管理**：React Router v6
- **图表库**：D3.js（知识图谱）、Framer Motion（动画）
- **图标库**：Lucide React
- **测试框架**：Vitest + Testing Library

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9 或 yarn >= 1.22

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 开发命令

```bash
# 代码检查
npm run lint

# 自动修复
npm run lint:fix

# 代码格式化
npm run format

# 运行测试
npm run test

# 测试覆盖率
npm run test:coverage
```

## 项目文档

详细的开发文档请查看 `.trae/documents/` 目录：

- [PRD.md](.trae/documents/PRD.md) - 产品需求文档
- [Technical-Architecture.md](.trae/documents/Technical-Architecture.md) - 技术架构文档
- [Development-Plan.md](.trae/documents/Development-Plan.md) - 开发计划
- [Development-Rules.md](.trae/documents/Development-Rules.md) - 开发规则
- [Development-Standards.md](.trae/documents/Development-Standards.md) - 开发规范

## 项目结构

```
src/
├── assets/           # 静态资源
├── components/       # 通用组件
│   ├── layout/       # 布局组件
│   ├── knowledge/    # 知识相关组件
│   ├── graph/        # 图谱组件
│   └── collaboration/ # 协作组件
├── pages/            # 页面组件
│   ├── Dashboard/
│   ├── Domain/
│   ├── Graph/
│   ├── Collaboration/
│   └── Settings/
├── stores/           # Zustand 状态管理
├── hooks/            # 自定义 Hooks
├── mock/             # Mock 数据
├── types/            # TypeScript 类型定义
├── utils/            # 工具函数
├── test/             # 测试配置
├── App.tsx           # 根组件
├── main.tsx          # 入口文件
└── index.css         # 全局样式
```

## 开发团队

- 项目负责人：
- 前端开发：
- 后端开发：
- 产品设计：

## License

MIT
