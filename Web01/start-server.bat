@echo off
chcp 65001 >nul

echo 🏛️ 启动中国传统宗教造像艺术科普网站...
echo 📍 项目目录: %cd%
echo 🌐 服务器地址: http://localhost:8000
echo.
echo 📝 使用说明:
echo    1. 浏览器会自动打开网站
echo    2. 如果没有自动打开，请手动访问: http://localhost:8000
echo    3. 关闭此窗口停止服务器
echo.

REM 检查Python是否可用
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ 使用 Python 启动服务器...
    start http://localhost:8000
    python -m http.server 8000
) else (
    python3 --version >nul 2>&1
    if %errorlevel% == 0 (
        echo ✅ 使用 Python3 启动服务器...
        start http://localhost:8000
        python3 -m http.server 8000
    ) else (
        echo ❌ 错误: 未找到 Python，请先安装 Python
        echo 📥 下载地址: https://www.python.org/downloads/
        pause
        exit /b 1
    )
)
