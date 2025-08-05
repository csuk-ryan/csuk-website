# GitHub Authentication Setup

## Current Issue
Your repository is ready to push, but there's an authentication mismatch between your local Git config (`ryangreenio`) and the repository owner (`csuk-ryan`).

## Solutions (Choose One)

### Option 1: Use Personal Access Token (Easiest)
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Copy the token
4. Run these commands:
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/csuk-ryan/csuk-website.git
   git push -u origin main
   ```

### Option 2: Use GitHub CLI (Recommended)
1. Install GitHub CLI: `brew install gh` (on Mac)
2. Authenticate: `gh auth login`
3. Push: `git push -u origin main`

### Option 3: SSH Key Setup
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add to SSH agent: `ssh-add ~/.ssh/id_ed25519`
3. Copy public key: `cat ~/.ssh/id_ed25519.pub`
4. Add to GitHub → Settings → SSH and GPG keys
5. Test: `ssh -T git@github.com`
6. Push: `git push -u origin main`

### Option 4: Change Repository Owner
If you meant to use your `ryangreenio` account:
1. Create new repo at: https://github.com/ryangreenio/csuk-website
2. Update remote: `git remote set-url origin https://github.com/ryangreenio/csuk-website.git`
3. Push: `git push -u origin main`

## Current Repository Status
- ✅ All code committed locally
- ✅ Repository connected to GitHub
- ❌ Authentication needs to be resolved
- ⏳ Ready to push once auth is fixed

## After Successful Push
1. Verify code is visible at: https://github.com/csuk-ryan/csuk-website
2. Proceed to Netlify deployment
3. Connect Netlify to your GitHub repository

Choose the option that works best for your setup!