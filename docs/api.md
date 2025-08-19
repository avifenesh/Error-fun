# Error Message Fortune Cookies API Documentation

This document provides detailed information about the Error Message Fortune Cookies API.

## Table of Contents

1. [Initialization](#initialization)
2. [Core Methods](#core-methods)
3. [Configuration Options](#configuration-options)
4. [Fortune Styles](#fortune-styles)
5. [Visual Themes](#visual-themes)
6. [Storage Methods](#storage-methods)
7. [Custom Element](#custom-element)
8. [Events](#events)
9. [Browser Support](#browser-support)
10. [Performance Considerations](#performance-considerations)

## Initialization

### ErrorFortune.init(options)

Initializes the library with optional configuration.

```javascript
ErrorFortune.init({
  animation: true,
  defaultStyle: 'confucius',
  defaultTheme: 'zen',
  maxHistory: 10,
  maxFavorites: 20
});
```

All parameters are optional and will use default values if not provided.

## Core Methods

### ErrorFortune.crack(errorMessage, options)

Generates a fortune from an error message.

```javascript
const fortune = ErrorFortune.crack("TypeError: Cannot read property 'length' of undefined", {
  style: "haiku",
  theme: "dark",
  target: "fortune-container",
  animation: true,
  saveToHistory: true,
  callback: function(fortune, error) {
    if (error) {
      console.error("Error generating fortune:", error);
    } else {
      console.log("Fortune generated:", fortune);
    }
  }
});
```

**Parameters:**

- `errorMessage` (string, required): The error message to transform
- `options` (object, optional): Configuration options
  - `style` (string): Fortune style to use (default: from init config)
  - `theme` (string): Visual theme to use (default: from init config)
  - `target` (string|Element): Target element ID or DOM element to display the fortune
  - `animation` (boolean): Whether to animate the fortune (default: true)
  - `saveToHistory` (boolean): Whether to save to history (default: true)
  - `callback` (function): Function to call after fortune generation

**Returns:**

An object containing the fortune data:

```javascript
{
  original: "TypeError: Cannot read property 'length' of undefined",
  wisdom: "Confucius say: Man who seek what does not exist find himself drinking from empty cup.",
  style: "confucius",
  timestamp: "2023-06-15T12:34:56.789Z"
}
```

## Configuration Options

### Default Configuration

```javascript
{
  animation: true,        // Enable animations
  defaultStyle: 'confucius', // Default fortune style
  defaultTheme: 'zen',    // Default visual theme
  maxHistory: 10,         // Maximum number of history items
  maxFavorites: 20        // Maximum number of favorites
}
```

## Fortune Styles

The library includes several fortune styles:

- `confucius`: Wisdom in the style of Confucius
- `haiku`: Japanese-inspired poetry
- `tarot`: Mystical tarot card reading
- `blame`: Creative excuses and blame deflection
- `motivational`: Inspirational poster style
- `techSupport`: IT help desk responses
- `poetic`: Elegant poetic verse
- `zen`: Mindful meditation reflections

### Custom Transformers

You can add your own custom transformer:

```javascript
ErrorFortune.transformers.custom = function(error) {
  return "My custom fortune for: " + error;
};
```

## Visual Themes

Available themes:

- `zen`: Calm, minimalist design with teal accents
- `chaos`: Vibrant, energetic design with red and yellow
- `dark`: Dark mode with light text
- `light`: Light mode with dark text

## Storage Methods

### ErrorFortune.getHistory()

Returns an array of fortune objects from history.

```javascript
const history = ErrorFortune.getHistory();
console.log(history);
```

### ErrorFortune.getFavorites()

Returns an array of fortune objects from favorites.

```javascript
const favorites = ErrorFortune.getFavorites();
console.log(favorites);
```

### ErrorFortune.addToFavorites(fortune)

Adds or removes a fortune from favorites (toggles).

```javascript
ErrorFortune.addToFavorites(fortune);
```

### ErrorFortune.exportData()

Exports history and favorites as a JSON file download.

```javascript
ErrorFortune.exportData();
```

### ErrorFortune.importData(file)

Imports history and favorites from a JSON file.

```javascript
// In a file input change handler:
ErrorFortune.importData(fileInputElement.files[0]);
```

## Custom Element

The library registers a custom element for easy embedding:

```html
<error-fortune 
  message="ReferenceError: x is not defined" 
  style="haiku" 
  theme="dark"
  animation="true">
</error-fortune>
```

**Attributes:**

- `message` (required): The error message to transform
- `style`: Fortune style to use
- `theme`: Visual theme to use
- `animation`: Whether to animate the fortune ("true" or "false")

## Events

The library does not currently emit custom events.

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance Considerations

- The library uses lazy loading for history and favorites
- Image generation can be resource-intensive
- For best performance, limit the number of fortune elements on a page
- Consider disabling animations on low-end devices