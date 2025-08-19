# Contributing to Error Message Fortune Cookies

Thank you for your interest in contributing to Error Message Fortune Cookies! This document provides guidelines and instructions for contributing.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Environment](#development-environment)
4. [Branching Strategy](#branching-strategy)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Testing](#testing)
8. [Documentation](#documentation)
9. [Style Guide](#style-guide)
10. [Adding New Features](#adding-new-features)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/YOUR-USERNAME/error-fortune-cookies.git
   cd error-fortune-cookies
   ```
3. Add the original repository as a remote
   ```bash
   git remote add upstream https://github.com/original-owner/error-fortune-cookies.git
   ```
4. Install dependencies
   ```bash
   npm install
   ```

## Development Environment

1. Start the development server
   ```bash
   npm run dev
   ```
   This will start a local server at http://localhost:1234

2. Make your changes and see them live-reload in the browser

3. Run tests to ensure your changes don't break existing functionality
   ```bash
   npm test
   ```

## Branching Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- Feature branches - Named as `feature/your-feature-name`
- Bug fix branches - Named as `fix/issue-description`

Always create your branch from `develop`:

```bash
git checkout develop
git pull upstream develop
git checkout -b feature/your-feature-name
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code changes that neither fix bugs nor add features
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Changes to the build process or tools

Example:
```
feat: add tech support fortune style
```

## Pull Request Process

1. Update your feature branch with the latest changes from develop
   ```bash
   git checkout develop
   git pull upstream develop
   git checkout feature/your-feature-name
   git rebase develop
   ```

2. Push your changes to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request against the `develop` branch of the original repository

4. Ensure your PR includes:
   - A clear description of the changes
   - Any relevant issue numbers (e.g., "Fixes #123")
   - Updates to documentation if needed
   - Tests for new functionality

5. A maintainer will review your PR and may request changes

6. Once approved, your PR will be merged

## Testing

All new features and bug fixes should include tests:

1. Write tests for your changes in the `tests` directory
2. Run the test suite to ensure all tests pass
   ```bash
   npm test
   ```
3. Ensure your code has good coverage

## Documentation

Update documentation when adding or changing features:

1. Update relevant sections in README.md
2. Update API documentation in docs/api.md
3. Add examples if appropriate
4. Document any breaking changes clearly

## Style Guide

We use ESLint to enforce code style. Run the linter before submitting:

```bash
npm run lint
```

General style guidelines:

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Use camelCase for variables and functions
- Use PascalCase for classes
- Add JSDoc comments for public APIs

## Adding New Features

### Adding a New Fortune Style

1. Create a new transformer function in `src/js/core/transformers.js`
2. Add your transformer to the exports
3. Register it in the transformers object in `src/js/index.js`
4. Add tests in `tests/transformers.test.js`
5. Update documentation to include the new style

### Adding a New Theme

1. Add theme variables in `src/css/main.css`
2. Create theme-specific styles
3. Update documentation to include the new theme

Thank you for contributing to Error Message Fortune Cookies!