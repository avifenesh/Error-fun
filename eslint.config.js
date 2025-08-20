export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        Promise: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        HTMLElement: 'readonly',
        customElements: 'readonly',
        Event: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        IntersectionObserver: 'readonly',
        ClipboardItem: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'semi': ['error', 'always'],
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],
      'no-unused-vars': ['warn'],
      'no-var': 'error',
      'prefer-const': 'warn',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'brace-style': ['error', '1tbs'],
      'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'comma-style': ['error', 'last'],
      'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
      'padded-blocks': ['error', 'never'],
      'max-len': ['warn', { 'code': 100, 'ignoreUrls': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true }]
    }
  }
];