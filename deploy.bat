@echo off
echo ========================================
echo  🚀 部署到 GitHub Pages
echo ========================================
echo.

echo [1/3] 推送代码到 GitHub...
git push -u origin main
if errorlevel 1 (
    echo.
    echo ❌ 推送失败！
    echo 请确保已登录 GitHub 并正确配置仓库
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ 代码推送成功！
echo.

echo [2/3] 部署到 GitHub Pages...
call npm run deploy
if errorlevel 1 (
    echo.
    echo ❌ 部署失败！
    pause
    exit /b 1
)

echo.
echo ========================================
echo  🎉 部署完成！
echo ========================================
echo.
echo 您的网站将在几分钟后上线
echo 访问地址: https://TLXX01.github.io/portfolio-website/
echo.
echo 设置 GitHub Pages 步骤:
echo 1. 打开您的仓库: https://github.com/TLXX01/portfolio-website
echo 2. 点击 Settings -^> Pages
echo 3. Source 选择: Deploy from a branch
echo 4. Branch 选择: gh-pages
echo 5. 点击 Save
echo.
pause