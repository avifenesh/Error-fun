# GEMINI Code Assistant Context

This document provides context for the Gemini code assistant to understand the "Error Fortune Cookies" project.

## Project Overview

This is a simple, front-end web application built with vanilla JavaScript, HTML, and CSS. It allows users to input an error message and receive a humorous "fortune cookie" style interpretation of it. The application is designed to be lightweight, with no external frameworks and a minimal build process.

The core technologies used are:
*   **JavaScript (ES6 Modules):** The application logic is written in modern JavaScript, using modules to separate concerns.
*   **HTML5:** A single `index.html` file provides the structure of the application.
*   **CSS3:** Basic styling is provided in `src/css/styles.css`.
*   **Jest:** Used for unit testing the transformation logic.
*   **ESLint:** Used for linting and maintaining code quality.

The project follows a clear architectural pattern:
*   `src/js/app.js`: Handles all DOM manipulation, event listeners, and application state.
*   `src/js/transformers.js`: Contains pure functions that take an error string and transform it into a fortune. This separates the core logic from the UI.
*   `index.html`: The main entry point and UI layout.
*   `tests/transformers.test.js`: Unit tests for the transformer functions.

## Building and Running

### Development

To run the development server, use the following command. This will serve the `index.html` file and allow for live reloading.

```bash
npm run dev
```

This command starts a simple Python HTTP server on port 8080.

### Testing

To run the unit tests, use the following command:

```bash
npm test
```

This will execute the Jest test runner and run all tests in the `tests/` directory.

### Linting

To check the code for style and potential errors, run the linter:

```bash
npm run lint
```

This will run ESLint on all JavaScript files in the `src/js/` directory.

## Development Conventions

*   **Code Style:** The project uses a consistent, readable style enforced by ESLint. Key conventions include:
    *   ES6 modules (`import`/`export`).
    *   Classes for organizing application logic (`ErrorFortune` in `app.js`).
    *   Pure functions for data transformation (`transformers.js`).
*   **Testing:** Unit tests are written for the core transformation logic in `transformers.js`. Tests are located in the `tests/` directory and follow the `*.test.js` naming convention.
*   **Dependencies:** The project has no production dependencies. Development dependencies are managed with npm and are listed in `package.json`.
*   **No Build Step:** The project is designed to run directly in the browser without a build or transpilation step.
