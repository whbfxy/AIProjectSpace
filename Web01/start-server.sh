#!/bin/bash

# 中国传统宗教造像艺术科普网站启动脚本

echo "🏛️ 启动中国传统宗教造像艺术科普网站..."
echo "📍 项目目录: $(pwd)"
echo "🌐 服务器地址: http://localhost:8000"
echo ""
echo "📝 使用说明:"
echo "   1. 浏览器会自动打开网站"
echo "   2. 如果没有自动打开，请手动访问: http://localhost:8000"
echo "   3. 按 Ctrl+C 停止服务器"
echo ""

# 检查Python是否可用
if command -v python3 &> /dev/null; then
    echo "✅ 使用 Python3 启动服务器..."
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ 使用 Python 启动服务器..."
    python -m http.server 8000
else
    echo "❌ 错误: 未找到 Python，请先安装 Python"
    exit 1
fi
