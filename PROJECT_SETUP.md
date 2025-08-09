# ElectronForge 项目设置完成

🎉 恭喜！您的 ElectronForge 项目已经成功设置完成。

## 项目概述

**项目名称**: ElectronForge  
**版本**: 1.0.0  
**描述**: 基于 Electron + React + HeroUI + TanStack Router 的现代桌面应用程序模板

## 技术栈

- 🚀 **Electron 36+** - 跨平台桌面应用框架
- ⚛️ **React 19** - 现代组件化UI库
- 🎨 **HeroUI 2+** - 美观的组件库
- 📦 **TypeScript 5+** - 类型安全的开发
- ⚡ **Vite 6+** - 极速构建工具
- 🎨 **TailwindCSS 4+** - 实用优先的CSS框架
- 🚦 **TanStack Router** - 现代路由解决方案

## 已完成的设置

### ✅ 项目重命名和配置
- 项目从 "era" 重命名为 "electron-forge"
- 更新了 package.json 中的项目信息
- 版本重置为 1.0.0

### ✅ Git 仓库初始化
- 初始化了 Git 仓库
- 创建了专业的 .gitignore 文件
- 完成了初始提交
- 创建了 v1.0.0 版本标签

### ✅ GitHub Actions 工作流
- **CI 工作流** (`.github/workflows/ci.yml`)
  - 代码质量检查 (ESLint, Prettier)
  - 类型检查
  - 安全审计
  - 自动构建测试

- **构建和发布工作流** (`.github/workflows/build.yml`)
  - 多平台自动构建 (Windows, macOS, Linux)
  - 自动发布到 GitHub Releases
  - 支持标签触发的自动发布

### ✅ 项目文档
- **README.md** - 项目介绍和使用说明
- **CONTRIBUTING.md** - 贡献指南
- **CODE_OF_CONDUCT.md** - 行为准则
- **SECURITY.md** - 安全政策
- **CHANGELOG.md** - 版本变更记录

## 下一步操作

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个新的仓库，名称建议为 `electron-forge`。

### 2. 推送代码到 GitHub

```bash
# 添加远程仓库（替换为您的 GitHub 用户名）
git remote add origin https://github.com/yourusername/electron-forge.git

# 推送代码和标签
git push -u origin main
git push origin --tags
```

### 3. 启用 GitHub Actions

推送代码后，GitHub Actions 将自动启用：
- CI 工作流将在每次推送和 PR 时运行
- 构建工作流将在创建标签时自动构建多平台应用

### 4. 配置仓库设置

在 GitHub 仓库设置中：
- 启用 Issues 和 Discussions
- 设置分支保护规则
- 配置 Dependabot 安全更新
- 添加仓库描述和标签

### 5. 自定化项目信息

更新以下文件中的占位符信息：
- `package.json` 中的 author 和 repository URL
- `README.md` 中的 GitHub 链接
- `SECURITY.md` 中的联系邮箱

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 代码检查和格式化
npm run lint
npm run format

# 构建应用
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

## 发布新版本

1. 更新版本号：
   ```bash
   npm version patch  # 或 minor, major
   ```

2. 更新 CHANGELOG.md

3. 推送标签：
   ```bash
   git push origin --tags
   ```

4. GitHub Actions 将自动构建和发布

## 项目特性

- 🔥 **热重载开发** - 快速开发体验
- 🪟 **自定义窗口** - 专业的窗口控件和标题栏
- 🌙 **主题切换** - 内置深色/浅色模式
- 🔒 **安全通信** - 安全的 IPC 通信模式
- 📱 **响应式设计** - 适配不同屏幕尺寸
- 🛠️ **专业构建** - 多平台打包和分发
- 📋 **代码质量** - ESLint + Prettier + TypeScript
- 🚀 **现代架构** - 最新的 Web 技术栈

## 支持和贡献

- 查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解如何贡献
- 阅读 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) 了解社区准则
- 查看 [SECURITY.md](./SECURITY.md) 了解安全政策

---

🎊 **项目设置完成！** 现在您可以开始开发您的 Electron 应用程序了。