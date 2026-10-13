@echo off
echo ========================================================
echo   Starting AI Future Lab - K-12 AI Learning Platform
echo ========================================================
echo.
echo Building the application...
call npm run build
if errorlevel 1 (
    echo Application build failed.
    pause
    exit /b 1
)
echo Starting local web server on port 3000...
start "" "http://localhost:3000"
python -m http.server 3000
pause
