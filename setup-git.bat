@echo off
echo 正在配置 Git...
git config --global user.name "TLXX01"
git config --global user.email "2964718872@qq.com"
echo Git 配置完成！
echo.
echo 当前 Git 配置：
git config --global --list
pause