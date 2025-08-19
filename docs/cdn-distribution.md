# CDN Distribution Configuration

This document outlines the configuration for distributing Error Message Fortune Cookies via CDN.

## Files to Distribute

The following files should be included in the CDN distribution:

1. `error-fortune.js` - Main library file (UMD format)
2. `error-fortune.min.js` - Minified library file (UMD format)
3. `error-fortune.esm.js` - ES Module version
4. `error-fortune.css` - Main CSS file
5. `error-fortune.min.css` - Minified CSS file

## CDN Setup

We recommend using one of the following CDN providers:

### jsDelivr

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/npm/error-fortune-cookies@latest/dist/error-fortune.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/error-fortune-cookies@latest/dist/error-fortune.min.css">

<!-- Specific version -->
<script src="https://cdn.jsdelivr.net/npm/error-fortune-cookies@1.0.0/dist/error-fortune.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/error-fortune-cookies@1.0.0/dist/error-fortune.min.css">
```

### unpkg

```html
<!-- Latest version -->
<script src="https://unpkg.com/error-fortune-cookies/dist/error-fortune.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/error-fortune-cookies/dist/error-fortune.min.css">

<!-- Specific version -->
<script src="https://unpkg.com/error-fortune-cookies@1.0.0/dist/error-fortune.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/error-fortune-cookies@1.0.0/dist/error-fortune.min.css">
```

## Build Process

To prepare files for CDN distribution:

1. Run the build script:
   ```bash
   npm run build:all
   ```

2. This will generate the following files in the `dist` directory:
   - `error-fortune.js`
   - `error-fortune.min.js`
   - `error-fortune.esm.js`

3. For CSS files, run:
   ```bash
   parcel build src/css/main.css --out-file error-fortune.css --out-dir dist
   parcel build src/css/main.css --out-file error-fortune.min.css --out-dir dist --experimental-scope-hoisting
   ```

## Version Management

- Always use semantic versioning (MAJOR.MINOR.PATCH)
- Update the version in package.json before publishing
- Tag releases in git with the version number

## Cache Control

Recommended cache control headers for CDN:

- `Cache-Control: public, max-age=31536000, immutable` for versioned URLs
- `Cache-Control: public, max-age=86400, must-revalidate` for latest URLs

## SRI (Subresource Integrity)

Generate SRI hashes for each release:

```bash
cat dist/error-fortune.min.js | openssl dgst -sha384 -binary | openssl base64 -A
```

Then use in HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/error-fortune-cookies@1.0.0/dist/error-fortune.min.js" 
        integrity="sha384-HASH_VALUE_HERE" 
        crossorigin="anonymous"></script>
```