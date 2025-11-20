# PowerShell script to push portfolio to GitHub
# Make sure Git is installed before running this script

Write-Host "=== Portfolio GitHub Push Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "After installing, restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Step 1: Initializing Git repository..." -ForegroundColor Cyan
if (Test-Path .git) {
    Write-Host "Git repository already initialized." -ForegroundColor Green
} else {
    git init
    Write-Host "Git repository initialized." -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 2: Adding all files..." -ForegroundColor Cyan
git add .
Write-Host "Files added." -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Creating commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Portfolio website with dark mode and Unsplash images"
Write-Host "Commit created." -ForegroundColor Green

Write-Host ""
Write-Host "Step 4: Setting up remote repository..." -ForegroundColor Cyan
Write-Host "Please enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git):" -ForegroundColor Yellow
$repoUrl = Read-Host "Repository URL"

if ($repoUrl) {
    Write-Host ""
    Write-Host "Adding remote origin..." -ForegroundColor Cyan
    git remote remove origin 2>$null
    git remote add origin $repoUrl
    Write-Host "Remote added." -ForegroundColor Green
    
    Write-Host ""
    Write-Host "Step 5: Pushing to GitHub..." -ForegroundColor Cyan
    git branch -M main
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "SUCCESS! Your portfolio has been pushed to GitHub!" -ForegroundColor Green
        Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "ERROR: Push failed. You may need to:" -ForegroundColor Red
        Write-Host "1. Authenticate with GitHub (use GitHub Desktop or configure Git credentials)" -ForegroundColor Yellow
        Write-Host "2. Check if the repository exists and you have access" -ForegroundColor Yellow
        Write-Host "3. Try: git push -u origin main --force (if you need to overwrite)" -ForegroundColor Yellow
    }
} else {
    Write-Host "No repository URL provided. Skipping remote setup." -ForegroundColor Yellow
    Write-Host "You can add it later with: git remote add origin YOUR_REPO_URL" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Script completed!" -ForegroundColor Cyan

