# CRUSH Configuration

## Build Commands
```bash
# Development server
npm run dev

# Build for production
npm run build
npm run build:all

# Build specific formats
npm run build:esm
npm run build:min
```

## Test Commands
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Lint/Format Commands
```bash
# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## Code Style Guidelines

### General
- Use consistent indentation (2 spaces)
- Follow language-specific naming conventions
- Keep functions small and focused
- Write descriptive variable and function names

### Error Handling
- Handle errors explicitly, don't ignore them
- Use appropriate error types for the language
- Provide meaningful error messages

### Comments
- Only add comments when code intent isn't clear
- Keep comments up to date with code changes
- Prefer self-documenting code over comments

## Project Structure
- src/js/core: Core transformation logic
- src/js/ui: UI components and animations
- src/css: Styling
- tests: Test files