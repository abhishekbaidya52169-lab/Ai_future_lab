Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Starting AI Future Lab - K-12 AI Learning Platform" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Building the application..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "The application build failed."
    exit $LASTEXITCODE
}

Write-Host "Opening http://localhost:3000 in your browser..." -ForegroundColor Green
Start-Process "http://localhost:3000"
python -m http.server 3000
