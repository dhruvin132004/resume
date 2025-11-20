# How to Push Your Portfolio to GitHub

## Quick Setup Guide

### Step 1: Install Git (if not already installed)
1. Download Git for Windows: https://git-scm.com/download/win
2. Run the installer (use default settings)
3. Restart your terminal/PowerShell after installation

### Step 2: Run the Push Script
1. Open PowerShell in the `D:\resume` folder
2. Run the script:
   ```powershell
   .\push-to-github.ps1
   ```
3. Follow the prompts and enter your GitHub repository URL when asked

### Alternative: Manual Steps

If you prefer to do it manually:

1. **Initialize Git:**
   ```bash
   git init
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Create commit:**
   ```bash
   git commit -m "Initial commit: Portfolio website"
   ```

4. **Add your GitHub repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```
   (Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repository name)

5. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

### If You Get Authentication Errors:

**Option A: Use GitHub Desktop (Easiest)**
1. Download: https://desktop.github.com/
2. Open GitHub Desktop
3. File → Add Local Repository → Select `D:\resume`
4. Click "Publish repository" and make it public

**Option B: Use Personal Access Token**
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` permissions
3. Use the token as your password when pushing

**Option C: Use SSH (Advanced)**
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add SSH key to GitHub: Settings → SSH and GPG keys
3. Change remote URL: `git remote set-url origin git@github.com:USERNAME/REPO.git`

### Your Repository URL Format:
- HTTPS: `https://github.com/username/repo-name.git`
- SSH: `git@github.com:username/repo-name.git`

---

**Need Help?** Make sure:
- ✅ Git is installed and in your PATH
- ✅ You have a GitHub account
- ✅ You've created a repository on GitHub
- ✅ You have the correct repository URL

