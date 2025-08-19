# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automating various tasks in the Error Message Fortune Cookies project.

## Available Workflows

### 1. Build and Deploy (`build-and-deploy.yml`)

This workflow runs on every push to the main branch and pull requests targeting the main branch.

**What it does:**
- Checks out the code
- Sets up Node.js
- Installs dependencies
- Runs tests
- Builds the project
- Deploys to GitHub Pages (only on pushes to main)

### 2. Publish to npm (`npm-publish.yml`)

This workflow runs when a new GitHub release is created.

**What it does:**
- Checks out the code
- Sets up Node.js with npm registry configuration
- Installs dependencies
- Runs tests
- Builds the project
- Publishes to npm

## Setting up Secrets

For the npm publishing workflow to work, you need to add an NPM_TOKEN secret to your repository:

1. Go to your npm account and create an access token with publish permissions
2. Go to your GitHub repository settings
3. Navigate to Secrets > Actions
4. Add a new secret named `NPM_TOKEN` with your npm access token as the value