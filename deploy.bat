@echo off
REM Windows 部署脚本
REM 使用方法: deploy.bat [docker|build]

setlocal enabledelayedexpansion

set DEPLOY_METHOD=%1
if "%DEPLOY_METHOD%"=="" set DEPLOY_METHOD=docker

echo 🚀 开始部署项目...
echo 📦 部署方式: %DEPLOY_METHOD%

if "%DEPLOY_METHOD%"=="docker" (
    echo 🐳 使用 Docker 部署...
    docker build -t homepage:latest .
    echo ✅ Docker 镜像构建完成
    echo 📝 运行命令: docker run -p 3000:3000 homepage:latest
    echo 📝 或使用: docker-compose up -d
) else if "%DEPLOY_METHOD%"=="build" (
    echo 🔨 仅构建项目...
    pnpm install
    pnpm build
    echo ✅ 构建完成
) else (
    echo ❌ 未知的部署方式: %DEPLOY_METHOD%
    echo 使用方法: deploy.bat [docker|build]
    exit /b 1
)

echo 🎉 部署流程完成！


