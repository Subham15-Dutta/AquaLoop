@echo off
echo.
echo ============================================
echo   AQUA LOOP - Installation Verification
echo ============================================
echo.

echo [1/4] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is NOT installed
    echo Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
) else (
    echo ✅ Node.js is installed
    node --version
)

echo.
echo [2/4] Checking if .env.local exists...
if exist .env.local (
    echo ✅ .env.local file found
) else (
    echo ❌ .env.local file NOT found
    echo Please create .env.local with your Supabase credentials
    echo See .env.local.example for template
    pause
    exit /b 1
)

echo.
echo [3/4] Checking node_modules...
if exist node_modules (
    echo ✅ Dependencies already installed
) else (
    echo ⚠️  Dependencies not installed yet
    echo Run: npm install
)

echo.
echo [4/4] Project Structure Check...
if exist app (echo ✅ app/) else (echo ❌ app/ missing)
if exist components (echo ✅ components/) else (echo ❌ components/ missing)
if exist lib (echo ✅ lib/) else (echo ❌ lib/ missing)
if exist types (echo ✅ types/) else (echo ❌ types/ missing)
if exist backend (echo ✅ backend/) else (echo ❌ backend/ missing)

echo.
echo ============================================
echo   Verification Complete!
echo ============================================
echo.
echo To start the application:
echo   1. npm install (if not done)
echo   2. npm run dev
echo   3. Open http://localhost:3000
echo.
pause
