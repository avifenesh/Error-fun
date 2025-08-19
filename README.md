# Error Message Fortune Cookies 🥠

Transform boring error messages into humorous fortune cookie wisdom!

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Overview

Error Message Fortune Cookies is a lightweight JavaScript library that turns frustrating error messages into entertaining fortune cookie wisdom. Whether you're building a developer tool, creating a fun error page, or just want to add some humor to your application, this library provides a delightful way to present errors.

## Features

- **20 Fortune Styles**: Choose from Confucius, Haiku, Tarot, Blame, Motivational, Tech Support, Poetic, Zen Meditation, Shakespearean Drama, Film Noir Detective, Sci-Fi Technobabble, Pirate Speak, Cowboy Western, Superhero Comic, Medieval Fantasy, B-Movie Horror, Social Media Influencer, Legal Jargon, Cooking Recipe, and Sports Commentary
- **4 Visual Themes**: Zen, Chaos, Dark, and Light themes to match your application
- **Animated Cookie**: Engaging crack animation with fortune reveal
- **Sharing Options**: Generate images, copy links, and share to social media
- **Favorites & History**: Save and revisit your favorite fortunes
- **Fully Accessible**: Screen reader support and keyboard navigation
- **Multiple Integration Options**: JavaScript API, Custom Element, or iframe embed

## Live Demo

Check out the live demo at [https://avifenesh.github.io/Error-fun/](https://avifenesh.github.io/Error-fun/)

Want to try it right now? Use our [interactive transformer tool](https://avifenesh.github.io/Error-fun/try.html) to convert your own error messages!

## Installation

### NPM
```bash
npm install error-fortune-cookies
```

### CDN
```html
<script src="https://unpkg.com/error-fortune-cookies@1.0.0/dist/error-fortune.min.js"></script>
```

### Direct Download
You can also [download the latest release](https://github.com/avifenesh/Error-fun/releases) directly from GitHub.

## Quick Start

### Basic Usage
```html
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
```

### Custom Element
```html
<error-fortune 
  message="ReferenceError: x is not defined" 
  style="haiku" 
  theme="dark">
</error-fortune>
```

## API Reference

### ErrorFortune.init(options)
Initialize the library with optional configuration.

```javascript
ErrorFortune.init({
  animation: true,
  defaultStyle: 'confucius',
  defaultTheme: 'zen',
  maxHistory: 10,
  maxFavorites: 20
});
```

### ErrorFortune.crack(errorMessage, options)
Generate a fortune from an error message.

```javascript
ErrorFortune.crack("SyntaxError: Unexpected token", {
  style: "tarot",        // Fortune style
  theme: "dark",         // Visual theme
  target: "container-id", // Target element ID or element
  animation: true,       // Enable animations
  saveToHistory: true,   // Save to history
  callback: function(fortune) {
    console.log("Fortune generated:", fortune);
  }
});
```

### Available Styles
- `confucius` - Wisdom in the style of Confucius
- `haiku` - Japanese-inspired poetry
- `tarot` - Mystical tarot card reading
- `blame` - Creative excuses and blame deflection
- `motivational` - Inspirational poster style
- `techSupport` - IT help desk responses
- `poetic` - Elegant poetic verse
- `zen` - Mindful meditation reflections
- `shakespeare` - Dramatic Shakespearean dialogue
- `filmNoir` - Hard-boiled detective monologue
- `sciFi` - Futuristic technical jargon
- `pirate` - Swashbuckling pirate speak
- `cowboy` - Wild west frontier wisdom
- `superhero` - Comic book hero proclamations
- `medieval` - Fantasy realm declarations
- `horror` - B-movie horror narration
- `influencer` - Social media style updates
- `legal` - Complicated legal terminology
- `recipe` - Cooking instructions format
- `sports` - Enthusiastic sports commentary

### Available Themes
- `zen` - Calm, minimalist design
- `chaos` - Vibrant, energetic design
- `dark` - Dark mode
- `light` - Light mode

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request