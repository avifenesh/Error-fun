# Integration Guide

This guide explains how to integrate Error Message Fortune Cookies into various types of projects.

## Table of Contents

1. [Basic Integration](#basic-integration)
2. [Framework Integration](#framework-integration)
   - [React](#react)
   - [Vue](#vue)
   - [Angular](#angular)
3. [Backend Integration](#backend-integration)
4. [Error Handling Integration](#error-handling-integration)
5. [Custom Styling](#custom-styling)
6. [Advanced Configuration](#advanced-configuration)

## Basic Integration

### Script Tag

The simplest way to integrate is using a script tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error Fortune Cookies Demo</title>
  
  <!-- Include the library -->
  <script src="https://unpkg.com/error-fortune-cookies@1.0.0/dist/error-fortune.min.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/error-fortune-cookies@1.0.0/dist/error-fortune.min.css">
</head>
<body>
  <div id="fortune-container"></div>
  
  <script>
    // Initialize
    ErrorFortune.init();
    
    // Generate a fortune
    ErrorFortune.crack("TypeError: Cannot read property 'length' of undefined", {
      style: "confucius",
      theme: "zen",
      target: "fortune-container"
    });
  </script>
</body>
</html>
```

### Custom Element

You can also use the custom element:

```html
<error-fortune 
  message="ReferenceError: x is not defined" 
  style="haiku" 
  theme="dark">
</error-fortune>
```

### NPM Module

For projects using npm:

```bash
npm install error-fortune-cookies
```

Then in your JavaScript:

```javascript
import ErrorFortune from 'error-fortune-cookies';
import 'error-fortune-cookies/dist/error-fortune.css';

// Initialize
ErrorFortune.init();

// Generate a fortune
ErrorFortune.crack("SyntaxError: Unexpected token", {
  style: "tarot",
  theme: "dark",
  target: document.getElementById('fortune-container')
});
```

## Framework Integration

### React

```jsx
import React, { useEffect, useRef } from 'react';
import ErrorFortune from 'error-fortune-cookies';
import 'error-fortune-cookies/dist/error-fortune.css';

function ErrorFortuneComponent({ errorMessage, style = 'confucius', theme = 'zen' }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Initialize once
    ErrorFortune.init();
    
    // Generate fortune when props change
    if (errorMessage && containerRef.current) {
      ErrorFortune.crack(errorMessage, {
        style,
        theme,
        target: containerRef.current
      });
    }
  }, [errorMessage, style, theme]);
  
  return <div ref={containerRef} className="fortune-container"></div>;
}

export default ErrorFortuneComponent;
```

Usage:

```jsx
<ErrorFortuneComponent 
  errorMessage="TypeError: Cannot read property 'length' of undefined" 
  style="haiku"
  theme="dark"
/>
```

### Vue

```vue
<template>
  <div ref="fortuneContainer" class="fortune-container"></div>
</template>

<script>
import ErrorFortune from 'error-fortune-cookies';
import 'error-fortune-cookies/dist/error-fortune.css';

export default {
  name: 'ErrorFortune',
  props: {
    errorMessage: String,
    style: {
      type: String,
      default: 'confucius'
    },
    theme: {
      type: String,
      default: 'zen'
    }
  },
  watch: {
    errorMessage() {
      this.generateFortune();
    },
    style() {
      this.generateFortune();
    },
    theme() {
      this.generateFortune();
    }
  },
  mounted() {
    ErrorFortune.init();
    this.generateFortune();
  },
  methods: {
    generateFortune() {
      if (this.errorMessage && this.$refs.fortuneContainer) {
        ErrorFortune.crack(this.errorMessage, {
          style: this.style,
          theme: this.theme,
          target: this.$refs.fortuneContainer
        });
      }
    }
  }
}
</script>
```

Usage:

```vue
<ErrorFortune 
  error-message="TypeError: Cannot read property 'length' of undefined" 
  style="haiku"
  theme="dark"
/>
```

### Angular

```typescript
// error-fortune.component.ts
import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import ErrorFortune from 'error-fortune-cookies';
import 'error-fortune-cookies/dist/error-fortune.css';

@Component({
  selector: 'app-error-fortune',
  template: '<div class="fortune-container"></div>',
  styles: []
})
export class ErrorFortuneComponent implements OnInit, OnChanges {
  @Input() errorMessage: string;
  @Input() style: string = 'confucius';
  @Input() theme: string = 'zen';
  
  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    ErrorFortune.init();
    this.generateFortune();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.errorMessage || changes.style || changes.theme) {
      this.generateFortune();
    }
  }
  
  generateFortune() {
    if (this.errorMessage) {
      const container = this.el.nativeElement.querySelector('.fortune-container');
      ErrorFortune.crack(this.errorMessage, {
        style: this.style,
        theme: this.theme,
        target: container
      });
    }
  }
}
```

Usage:

```html
<app-error-fortune 
  errorMessage="TypeError: Cannot read property 'length' of undefined" 
  style="haiku"
  theme="dark">
</app-error-fortune>
```

## Backend Integration

### Node.js Error Handler

```javascript
const express = require('express');
const app = express();

// Error handler middleware
app.use((err, req, res, next) => {
  res.status(500).render('error', {
    errorMessage: err.message || 'Internal Server Error',
    errorStyle: 'confucius',
    errorTheme: 'zen'
  });
});

// In your error.ejs template:
// <error-fortune message="<%= errorMessage %>" style="<%= errorStyle %>" theme="<%= errorTheme %>"></error-fortune>
```

## Error Handling Integration

### Global Error Handler

```javascript
window.onerror = function(message, source, lineno, colno, error) {
  ErrorFortune.crack(error ? error.toString() : message, {
    target: document.getElementById('error-container'),
    style: 'blame',
    theme: 'chaos'
  });
  
  // Return true to prevent default browser error handling
  return true;
};
```

### Promise Error Handler

```javascript
window.addEventListener('unhandledrejection', function(event) {
  ErrorFortune.crack(`Promise Error: ${event.reason}`, {
    target: document.getElementById('error-container'),
    style: 'tarot',
    theme: 'dark'
  });
});
```

## Custom Styling

You can customize the appearance by overriding CSS variables:

```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --text-color: #333;
  --light-text: #666;
  --background-color: #f9f9f9;
  --card-background: #fff;
  --border-color: #ddd;
  --success-color: #6bbd6e;
  --warning-color: #ffbe0b;
  --error-color: #e63946;
  
  /* Theme colors */
  --zen-primary: #4ecdc4;
  --zen-secondary: #f7fff7;
  --chaos-primary: #ff6b6b;
  --chaos-secondary: #ffe66d;
}
```

## Advanced Configuration

### Custom Transformers

You can add your own custom transformer:

```javascript
ErrorFortune.transformers.custom = function(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Your custom transformation logic
  return `My custom fortune for ${errorType}: ${errorDetails}`;
};

// Use your custom transformer
ErrorFortune.crack("TypeError: Cannot read property 'length' of undefined", {
  style: "custom",
  target: "fortune-container"
});
```

### Callback Function

Use callbacks to perform actions after fortune generation:

```javascript
ErrorFortune.crack("TypeError: Cannot read property 'length' of undefined", {
  style: "confucius",
  theme: "zen",
  target: "fortune-container",
  callback: function(fortune, error) {
    if (error) {
      console.error("Error generating fortune:", error);
    } else {
      // Log the fortune
      console.log("Fortune generated:", fortune);
      
      // Track analytics
      analytics.track('Fortune Generated', {
        errorType: fortune.original.split(':')[0],
        style: fortune.style
      });
    }
  }
});
```