# Contributing to ElectronForge

感谢您对 ElectronForge 的贡献兴趣！我们欢迎所有形式的贡献，包括但不限于：

- 🐛 Bug 报告
- 💡 功能建议
- 📝 文档改进
- 🔧 代码贡献
- 🎨 UI/UX 改进

## 开发环境设置

### 前置要求

- Node.js (v18 或更高版本)
- npm, yarn, pnpm 或 bun
- Git

### 本地开发

1. Fork 这个仓库
2. 克隆你的 fork:
   ```bash
   git clone https://github.com/yourusername/electron-forge.git
   cd electron-forge
   ```

3. 安装依赖:
   ```bash
   npm install
   ```

4. 启动开发服务器:
   ```bash
   npm run dev
   ```

## 代码规范

### 代码风格

- 使用 TypeScript
- 遵循 ESLint 配置
- 使用 Prettier 进行代码格式化
- 使用有意义的变量和函数名
- 添加适当的注释

### 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### 类型 (Type)

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式化（不影响功能）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

#### 示例

```
feat(ui): add dark mode toggle button

fix(electron): resolve window focus issue on macOS

docs: update installation instructions

chore(deps): update electron to v28
```

## Pull Request 流程

1. 创建一个新的分支:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. 进行你的更改

3. 运行测试和代码检查:
   ```bash
   npm run lint
   npm run format
   ```

4. 提交你的更改:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. 推送到你的 fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. 创建 Pull Request

### Pull Request 要求

- 提供清晰的标题和描述
- 关联相关的 Issue（如果有）
- 确保所有 CI 检查通过
- 添加必要的测试（如果适用）
- 更新相关文档

## 报告 Bug

在报告 Bug 时，请包含以下信息：

- 操作系统和版本
- Node.js 版本
- ElectronForge 版本
- 重现步骤
- 预期行为
- 实际行为
- 错误日志（如果有）
- 截图（如果适用）

## 功能建议

在提出功能建议时，请：

- 描述你想要的功能
- 解释为什么这个功能有用
- 提供可能的实现方案（如果有想法）
- 考虑是否有替代方案

## 代码审查

所有的代码更改都需要经过代码审查。审查者会检查：

- 代码质量和可读性
- 是否遵循项目规范
- 是否有潜在的安全问题
- 是否有性能问题
- 测试覆盖率

## 发布流程

项目维护者会定期发布新版本：

1. 更新版本号
2. 更新 CHANGELOG.md
3. 创建 Git 标签
4. GitHub Actions 自动构建和发布

## 社区准则

- 保持友善和尊重
- 欢迎新贡献者
- 提供建设性的反馈
- 遵循开源精神

## 获得帮助

如果你需要帮助，可以：

- 查看现有的 Issues 和 Discussions
- 创建新的 Issue
- 联系项目维护者

感谢你的贡献！🎉