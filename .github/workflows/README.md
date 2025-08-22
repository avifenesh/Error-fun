# GitHub Workflows

## 🚀 Deploy Workflow (`deploy.yml`)

**Manually Dispatchable Deployment**

- **Trigger:** Manual dispatch or push to `main` branch
- **Features:**
  - Manual environment selection (production/staging)
  - Runs tests and linting before deploy
  - Deploys to GitHub Pages
  - Provides deployment summary with stats

**To manually trigger:**
1. Go to GitHub Actions tab
2. Select "Deploy Error Fortune Cookies"  
3. Click "Run workflow"
4. Choose environment (optional)

## 🧪 CI Workflow (`ci.yml`)

**Continuous Integration Testing**

- **Trigger:** Pull requests to `main` or manual dispatch
- **Features:**
  - Runs tests and linting
  - Validates file sizes
  - Checks HTML structure
  - Ensures ES6 modules are properly configured

## 📊 Deployment Stats

The workflows will show:
- Total file count
- Source code size
- Individual file sizes
- HTML validation results

## 🔧 Requirements

- Node.js 18
- NPM for dependency management
- GitHub Pages enabled for deployment
