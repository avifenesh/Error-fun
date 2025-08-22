# Error Fortune Cookies - GitHub Copilot Instructions

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Project Overview

Error Fortune Cookies is a JavaScript web application that transforms boring error messages into hilarious fortune cookie wisdom. Built with Parcel bundler, ES modules, comprehensive Jest test suite, and deployed via GitHub Actions to GitHub Pages.

## Working Effectively

### Bootstrap and Build Process
- **Install dependencies**: `npm ci` -- takes ~45 seconds to complete. NEVER CANCEL.
- **Development server**: `npm run dev` -- starts at http://localhost:1234, builds in ~3-4 seconds
- **Production build**: `npm run build` -- takes ~5-6 seconds to complete. NEVER CANCEL.
- **Set timeout to 120+ seconds** for npm commands to avoid premature cancellation

### Testing Requirements
- **Run all tests**: `npm test` -- takes ~2 seconds, runs 52 tests with Jest
- **Test with coverage**: `npm run test:coverage` -- takes ~3 seconds, shows coverage report
- **Watch mode**: `npm run test:watch` -- for continuous testing during development
- **NEVER CANCEL test commands** - they complete quickly but timeouts should be 60+ seconds

### Code Quality and Linting
- **Lint code**: `npm run lint` -- validates all src/**/*.js files with ESLint
- **Auto-fix linting**: `npm run lint:fix` -- automatically fixes style issues
- **ALWAYS run linting before committing** - CI will fail without clean lint

## Validation Scenarios

### Manual End-to-End Testing
After making any changes, **ALWAYS run through this complete validation scenario:**

1. **Start development server**: `npm run dev`
2. **Navigate to http://localhost:1234** in browser or use Playwright
3. **Test core functionality**:
   - Enter error message: `TypeError: Cannot read properties of undefined (reading 'length')`
   - Select different fortune styles (Confucius, Haiku, Shakespeare, etc.)
   - Click "Crack Fortune Cookie" button
   - Verify fortune is generated and displayed correctly
4. **Test sharing features**:
   - Test "Add to Favorites" button
   - Test "Copy Link" functionality
   - Verify history tracking works
5. **Test responsive design** by resizing browser window
6. **Test accessibility** with keyboard navigation

### Required Validation Commands
```bash
# Complete validation sequence - run in this order
npm ci                    # Bootstrap (45s, NEVER CANCEL)
npm run lint              # Code quality check
npm test                  # Run test suite (2s)
npm run build             # Production build (5s)
npm run dev               # Start dev server for manual testing
```

### Build Timing Expectations
- **npm ci**: 40-50 seconds (dependency installation)
- **npm run dev**: 3-4 seconds to start, instant hot reload
- **npm run build**: 5-6 seconds (production build)
- **npm test**: 1-3 seconds (Jest test suite)
- **npm run lint**: <1 second (ESLint validation)

**CRITICAL**: Set timeouts to 120+ seconds for all npm commands. Builds are fast but network conditions can vary.

## Project Structure and Key Files

### Source Code Organization
```
src/
├── js/
│   ├── core/              # Core transformation logic
│   │   ├── transformers.js         # Fortune transformation algorithms
│   │   └── creative-transformers.js # Creative style transformers
│   ├── ui/                # UI components and animations
│   │   └── animations.js           # Fortune cookie animations
│   └── index.js           # Main application entry point
├── css/
│   └── main.css           # Application styles
tests/                     # Jest test suite (52 tests)
├── main.test.js           # Core functionality tests
├── transformers.test.js   # Transformer logic tests
└── animations.test.js     # UI animation tests
```

### Configuration Files
- **package.json**: Scripts and dependencies (Parcel bundler, Jest, ESLint)
- **.eslintrc.json**: Code style rules (2-space indent, single quotes, ES2020)
- **jest.config.json**: Test configuration with jsdom environment
- **.babelrc**: Babel configuration for ES module support
- **.github/workflows/**: CI/CD pipeline (build, test, deploy to Pages)

### Key npm Scripts
```bash
npm run dev              # Parcel dev server at localhost:1234
npm run build            # Production build to dist/
npm test                 # Jest test suite
npm run test:watch       # Jest in watch mode
npm run test:coverage    # Jest with coverage report
npm run lint             # ESLint validation
npm run lint:fix         # Auto-fix ESLint issues
```

## Development Workflow

### Making Changes
1. **Always start with**: `npm ci && npm run lint && npm test`
2. **Start dev server**: `npm run dev`
3. **Make your changes** to src/ files
4. **Test continuously** - Parcel has hot reload
5. **Run validation suite** before committing:
   ```bash
   npm run lint    # Must pass for CI
   npm test        # Must pass all 52 tests
   npm run build   # Must build successfully
   ```

### Testing New Features
- **Add tests** to tests/ directory following existing patterns
- **Test transformer changes** by modifying tests/transformers.test.js
- **Test UI changes** with manual validation scenarios
- **Run full test suite** with `npm test` before committing

### Common Development Tasks

#### Adding New Fortune Styles
1. **Edit src/js/core/creative-transformers.js** - add new transformer function
2. **Update tests/transformers.test.js** - add test cases for new style
3. **Test manually** by selecting new style in UI and verifying output
4. **Run validation**: `npm test && npm run lint`

#### UI/CSS Changes
1. **Edit src/css/main.css** for styling changes
2. **Edit src/js/ui/** for interactive behavior
3. **Test with `npm run dev`** and verify responsive design
4. **Run manual validation scenario** to ensure nothing breaks
5. **Build and test**: `npm run build` to ensure production build works

#### Performance Optimizations
1. **Profile with browser dev tools** during manual testing
2. **Test build size** with `npm run build` and check dist/ output
3. **Verify animations** work smoothly across different devices
4. **Run test suite** to ensure optimizations don't break functionality

## CI/CD and Deployment

### GitHub Actions Workflow
- **Trigger**: Every push to main branch and pull requests
- **Steps**: Install dependencies → Lint → Test → Build → Deploy to GitHub Pages
- **Deployment**: Automatic to https://avifenesh.github.io/Error-fun/
- **Build artifacts**: dist/ directory with optimized assets

### Before Committing
```bash
npm run lint:fix     # Fix any auto-fixable issues
npm test             # Ensure all tests pass
npm run build        # Verify production build works
```

### Known Issues and Workarounds
- **One test currently fails** in tests/transformers.test.js (shakespearean transformer test fails intermittently)
- **Test failures are pre-existing** - do not fix unrelated test failures unless specifically assigned
- **html2canvas dependency** may show console errors in dev mode (non-blocking)
- **Parcel v1** is deprecated but project currently uses it (works fine, consider v2 migration)
- **Build succeeds even with test failures** - focus on your specific changes working correctly

## Browser Compatibility and Testing

### Supported Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)  
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Required Manual Testing
After any changes affecting user interaction:
1. **Test fortune generation** with various error messages
2. **Test all 20+ fortune styles** (Confucius, Haiku, Shakespeare, etc.)
3. **Test sharing functionality** (favorites, copy link, download)
4. **Test theme switching** (Zen, Chaos, Dark, Light themes)
5. **Verify accessibility** with keyboard-only navigation
6. **Test responsive behavior** on mobile viewport sizes

## Performance and Optimization

### Fast Development Loop
- **Parcel hot reload** makes CSS/JS changes instant during development
- **Jest tests** run in ~2 seconds for rapid feedback
- **ESLint** provides immediate code quality feedback

### Production Optimization
- **Parcel automatically** minifies, tree-shakes, and optimizes for production
- **Assets are hashed** for optimal caching
- **Bundle sizes are small** (~200KB total including dependencies)

---

**Remember**: Always validate your changes with the complete end-to-end scenario. The application must successfully transform error messages into fortune cookie wisdom with proper UI interactions and sharing features.