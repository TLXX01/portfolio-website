# 🚀 GitHub 部署指南

## 第一步：安装 Git
1. 下载 Git：https://git-scm.com/download/win
2. 运行安装程序，保持默认设置
3. 安装完成后，**关闭并重新打开**所有终端

## 第二步：配置 Git（已准备好脚本）
直接双击运行项目目录下的 `setup-git.bat` 文件即可完成配置

## 第三步：初始化 Git 仓库
在项目目录下打开命令提示符，依次运行：

```bash
# 1. 初始化仓库
git init

# 2. 添加所有文件
git add .

# 3. 创建提交
git commit -m "Initial commit - Portfolio website"
```

## 第四步：创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名可以是：`portfolio-website` 或者 `dolphin-yclm.github.io`
   - 如果用 `dolphin-yclm.github.io`，访问地址就是 https://dolphin-yclm.github.io/
   - 如果用其他名字，访问地址是 https://dolphin-yclm.github.io/仓库名/
3. 选择 **Public**（公开）
4. **不要勾选** "Initialize this repository with a README"
5. 点击 "Create repository"

## 第五步：推送到 GitHub
创建仓库后，GitHub 会显示命令，类似：

```bash
# 关联远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/dolphin-yclm/仓库名.git

# 重命名分支为 main
git branch -M main

# 推送到 GitHub
git push -u origin main
```

## 第六步：配置 GitHub Pages（可选）
如果您的仓库名不是 `dolphin-yclm.github.io`，需要修改 vite.config.ts：

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/仓库名/',  // 改成您的仓库名
})
```

## 第七步：部署到 GitHub Pages
```bash
npm run deploy
```

## 访问您的网站！
部署成功后，访问地址：
- `https://dolphin-yclm.github.io/` （如果仓库名是这个）
- `https://dolphin-yclm.github.io/仓库名/` （其他仓库名）

---

## 💡 快速部署脚本（可选）
等 Git 安装好后，我可以帮您创建一键部署脚本！