# 更新日志

本项目的所有重要更改都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)，
本项目遵循 [语义化版本控制](https://semver.org/spec/v2.0.0.html)。

## [未发布]

### 新增功能
- 使用 Electron + React + HeroUI + TanStack Router 的初始项目设置
- 基于 Vite 和 TypeScript 的现代开发技术栈
- 跨平台桌面应用程序支持
- 自定义窗口和标题栏实现
- 深色/浅色模式主题切换
- 专业的项目结构和组织
- 多平台综合构建系统
- CI/CD 的 GitHub Actions 工作流
- 贡献指南和文档

### 更改内容
- 项目从 "era" 重命名为 "electron-forge"
- 使用新项目信息更新 package.json
- 增强 README，提供详细文档
- 改进 .gitignore，包含全面规则

### 安全性
- 主进程和渲染进程之间的安全 IPC 通信
- 预加载脚本中的适当上下文隔离

## [11.0.0] - 2024-01-XX

- 🎉 Electron 版本升级至 `v36`
- 🎨 集成 HeroUI 组件系统

  - 添加了具有现代 UI 原语的新组件库
  - 实现了可访问和可定制的组件
  - 添加了 TypeScript 支持以获得更好的开发者体验
  - 与 Tailwind CSS 集成以实现一致的样式
  - 在欢迎套件中添加了新的组件展示

- 🎨 增强设计系统

  - 使用 CSS 变量实现新的颜色系统
  - 添加了用于一致主题的新设计令牌
  - 改进了深色/浅色模式实现
  - 添加了用于一致边框半径的新半径系统
  - 增强了排版系统
  - 添加了新的图表颜色调色板

- 🎨 欢迎套件改进

  - 添加了 HeroUI 展示部分
  - 增强了深色模式切换
  - 添加了新图标并更新了欢迎组件内容
  - 更新了欢迎组件样式以支持不带深色类的浅色模式
  - 使用 Badge 组件在 WelcomeKit 中集成了深色模式切换

- 🎨 开发者体验

  - 添加了新的组件配置系统
  - 改进了 TypeScript 支持
  - 增强了组件文档
  - 添加了新的开发实用程序
  - 修复了 ESLint 配置问题
  - 实现了用于应用资源的 res:// 协议

- 📦 依赖项
  - 将依赖项升级到最新版本：

| 包名                      | 版本       |
| ------------------------- | ---------- |
| @electron-toolkit/preload | `^3.0.2`   |
| @electron-toolkit/utils   | `^4.0.0`   |
| @tailwindcss/vite         | `^4.1.8`   |
| @vitejs/plugin-react      | `^4.5.0`   |
| electron                  | `^36.3.2`  |
| electron-builder          | `^26.0.12` |
| electron-vite             | `^3.1.0`   |
| eslint                    | `^9.28.0`  |
| eslint-plugin-react       | `^7.37.5`  |
| framer-motion             | `^12.15.0` |
| prettier                  | `^3.5.3`   |
| react                     | `^19.1.0`  |
| react-dom                 | `^19.1.0`  |
| tailwindcss               | `^4.1.8`   |
| typescript                | `^5.8.3`   |
| vite                      | `^6.3.5`   |

<br>

### v10.2.0

- 🎉 Electron 版本升级至 `v35.x.x`
- 📦 将依赖项升级到最新版本：

| 包名                               | 版本       |
| ---------------------------------- | ---------- |
| @electron-toolkit/preload          | `^3.0.2`   |
| @electron-toolkit/eslint-config    | `^2.1.0`   |
| @electron-toolkit/eslint-config-ts | `^3.1.0`   |
| @rushstack/eslint-patch            | `^1.11.0`  |
| @tailwindcss/vite                  | `^4.1.4`   |
| @vitejs/plugin-react               | `^4.4.1`   |
| electron                           | `^35.2.0`  |
| electron-builder                   | `^26.0.12` |
| electron-vite                      | `^3.1.0`   |
| eslint                             | `^9.25.1`  |
| eslint-plugin-react                | `^7.37.5`  |
| framer-motion                      | `^12.7.4`  |
| prettier                           | `^3.5.3`   |
| react                              | `^19.1.0`  |
| react-dom                          | `^19.1.0`  |
| tailwindcss                        | `^4.1.4`   |
| typescript                         | `^5.8.3`   |
| vite                               | `^6.3.2`   |

<br>

### v10.1.0

- 为仅构建依赖项添加 bun 配置
- 防止应用程序在 macOS 上关闭所有窗口时退出

<br>

### v10.0.0

- 🚀 重大改革：从 Webpack 完全迁移到 Vite
- ⚡ 显著改善构建时间和开发体验
- 🎨 添加 TailwindCSS 集成以实现现代样式
- 🏗️ 重构项目文件以获得更好的组织：
  - 将渲染器代码移至 `app/` 文件夹
  - 在 `lib/` 文件夹中整合共享代码
  - 将主进程代码移至 `lib/main` 文件夹
  - 将预加载代码移至 `lib/preload` 文件夹
- 💅 使用新设计系统和组件刷新 UI
- 🌓 增强深色/浅色模式实现，过渡更流畅
- 📦 更新 IPC 通信系统以获得更好的安全性
- 🔄 添加了带有交互式教程的新欢迎套件
- ⚙️ 简化配置文件和构建脚本
- 📊 改进日志记录和错误处理
- 🛠️ 将 Electron 更新到最新版本 `v31.2.2`
- 📈 将依赖项升级到最新版本：

| 包名                     | 版本      |
| -------------------- | --------- |
| electron             | `^34.3.0` |
| react                | `^19.0.0` |
| react-dom            | `^19.0.0` |
| typescript           | `^5.7.3`  |
| vite                 | `^6.2.0`  |
| tailwindcss          | `^4.0.9`  |
| electron-vite        | `^3.0.0`  |
| electron-builder     | `^25.1.8` |
| @vitejs/plugin-react | `^4.3.4`  |

<br>

### v8.1.0

- 🎉 Electron 版本升级至 `v23.0.0`。
- 使用 `eslint.config.json` 作为 eslint 配置。
- 调整了应用主题颜色。
- 升级了过时的包：

| 包名                                 | 版本      |
| ------------------------------------ | --------- |
| electron                             | `^31.2.1` |
| @electron-forge                      | `7.4.0`   |
| electron-squirrel-startup            | `^1.0.1`  |
| @pmmmwh/react-refresh-webpack-plugin | `^0.5.15` |
| @typescript-eslint                   | `^7.16.1` |
| css-loader                           | `^7.1.2`  |
| eslint                               | `^9.7.0`  |
| eslint-plugin-react                  | `^7.34.4` |
| react-refresh                        | `^0.14.2` |
| sass                                 | `^1.77.8` |
| sass-loader                          | `^14.2.1` |
| style-loader                         | `^4.0.0`  |
| typescript                           | `^5.5.3`  |
| webpack                              | `^5.93.0` |
| react                                | `^18.3.1` |
| react-dom                            | `^18.3.1` |

<br>

### v8.0.0

- 🎉 应用程序 UI 和主题（浅色/深色）。
- 使用最新的 Electron 版本 `v28`
- 更改了应用强调色并添加了致谢菜单项。
- 在项目文件结构中集成了 `electron-window` 组件和模块。
- 将深色/浅色主题从应用程序样式表中分离出来，便于修改。
- 添加了 `@styles` 别名以便轻松导入样式表。
- 默认从项目中移除了 `less-loader`。
- 移除了未使用的 `misc` 目录。
- 移除了未使用的 `src/common` 目录。
- 将窗口组件样式表从 `less` 转换为 `scss`。
- 使用更有用的提示更新了 forge 配置。

---

*此更新日志遵循 [Keep a Changelog](https://keepachangelog.com/) 格式和 [语义化版本控制](https://semver.org/) 原则。*

## 关于此项目

本项目由中文开发者维护，专注于为中文开发社区提供优质的 Electron 开发模板。我们使用 **bun** 作为首选包管理器，为开发者提供更快的安装和构建体验。

### 包管理器说明

本项目推荐并优化了对 **bun** 包管理器的支持：

```bash
# 安装依赖
bun install

# 开发模式
bun run dev

# 构建应用
bun run build
```

bun 提供了比传统包管理器更快的性能和更好的开发体验，特别适合现代 JavaScript/TypeScript 项目。
