/**
 * Error Fortune Cookies - Minimal Application
 * Clean implementation focusing only on core functionality
 */

import { transformers as originalTransformers } from './transformers.js';
import { transformers as mockingTransformers } from './mocking-transformers.js';
import { transformers as nerdyTransformers } from './nerdy-transformers.js';
import CookieScene from './cookie-scene.js';

const transformers = { ...originalTransformers, ...mockingTransformers, ...nerdyTransformers };

/**
 * Main ErrorFortune application class
 */
class ErrorFortune {
  constructor() {
    this.config = {
      defaultStyle: 'confucius'
    };
    
    this.elements = {};
    this.init();
  }
  
  /**
   * Initialize the application
   */
  init() {
    this.cacheElements();
    try {
      if (this.elements.cookieMount) {
        this.cookieScene = new CookieScene(this.elements.cookieMount);
      }
    } catch (e) {
      console.warn('CookieScene init failed', e);
    }
    this.bindEvents();
  }
  
  /**
   * Cache DOM elements for performance
   */
  cacheElements() {
    this.elements = {
      form: document.getElementById('errorForm'),
      errorInput: document.getElementById('errorMessage'),
      styleInputs: document.querySelectorAll('input[name="style"]'),
      fortuneDisplay: document.getElementById('fortuneDisplay'),
      originalError: document.getElementById('originalError'),
      sampleButton: document.getElementById('sampleButton'),
      cookieMount: document.getElementById('cookieMount')
    };
  }
  
  /**
   * Bind event listeners
   */
  bindEvents() {
    if (this.elements.form) {
      this.elements.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    if (this.elements.sampleButton) {
      this.elements.sampleButton.addEventListener('click', () => {
        const sample = this.loadSample();
        const style = this.getSelectedStyle();
        const errorMessage = this.elements.errorInput?.value.trim();
        if (errorMessage) this.generateFortune(errorMessage, style);
      });
    }
    
    // Keyboard shortcut: Ctrl+Enter to submit
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        this.elements.form?.dispatchEvent(new Event('submit'));
      }
    });
  }
  
  /**
   * Handle form submission
   */
  handleSubmit(e) {
    e.preventDefault();
    
    const errorMessage = this.elements.errorInput?.value.trim();
    if (!errorMessage) {
      alert('Please enter an error message');
      this.elements.errorInput?.focus();
      return;
    }
    
    const selectedStyle = this.getSelectedStyle();
    this.generateFortune(errorMessage, selectedStyle);
  }
  
  /**
   * Get the currently selected style
   */
  getSelectedStyle() {
    const selectedInput = Array.from(this.elements.styleInputs).find(input => input.checked);
    return selectedInput?.value || this.config.defaultStyle;
  }
  
  /**
   * Generate and display a fortune
   */
  generateFortune(errorMessage, style) {
    try {
      const transformer = transformers[style];
      if (!transformer) {
        throw new Error(`Unknown style: ${style}`);
      }
      
      const fortune = transformer(errorMessage);
      this.displayFortune(errorMessage, fortune);
      
    } catch (error) {
      console.error('Error generating fortune:', error);
      alert('Failed to generate fortune. Please try again.');
    }
  }
  
  /**
   * Display the generated fortune
   */
  displayFortune(originalError, fortune) {
    // Update content
    if (this.elements.originalError) {
      this.elements.originalError.textContent = originalError;
    }
    
    if (this.cookieScene) {
      this.cookieScene.crackWithFortune(fortune);
    }
    
    // Show the fortune display
    if (this.elements.fortuneDisplay) {
      this.elements.fortuneDisplay.style.display = 'block';
      
      // Smooth scroll to result
      this.elements.fortuneDisplay.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }
  
  /**
   * Load a sample error message
   */
  loadSample() {
    const samples = [
      "TypeError: Cannot read property 'length' of undefined",
      "ReferenceError: x is not defined", 
      "SyntaxError: Unexpected token {",
      "RangeError: Maximum call stack size exceeded",
      "TypeError: null is not an object",
      "Error: Network request failed",
      "TypeError: Cannot set property 'innerHTML' of null",
      "ReferenceError: $ is not defined",
      "SyntaxError: Unexpected end of input",
      "TypeError: Object.assign is not a function",
      "Error: ENOENT: no such file or directory, open 'config.json'",
      "TypeError: Cannot read property 'map' of undefined",
      "ReferenceError: React is not defined",
      "SyntaxError: Unexpected token '>'",
      "RangeError: Invalid array length",
      "TypeError: Cannot read property 'then' of undefined",
      "Error: ECONNREFUSED: connection refused",
      "TypeError: Cannot read property 'split' of null",
      "ReferenceError: document is not defined",
      "SyntaxError: Unexpected identifier",
      "Error: ETIMEDOUT: request timeout",
      "TypeError: Cannot read property 'toString' of undefined",
      "ReferenceError: window is not defined",
      "RangeError: Maximum call stack size exceeded",
      "TypeError: Cannot read property 'push' of undefined",
      "Error: EACCES: permission denied, open 'package.json'",
      "TypeError: Cannot read property 'charAt' of null",
      "ReferenceError: require is not defined",
      "SyntaxError: Unexpected token ';'",
      "Error: ENOTFOUND: getaddrinfo ENOTFOUND api.example.com"
    ];
    
    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    
    if (this.elements.errorInput) {
      this.elements.errorInput.value = randomSample;
      this.elements.errorInput.focus();
    }
    return randomSample;
  }
  
  /**
   * Public API method to generate fortune programmatically
   */
  crack(errorMessage, options = {}) {
    const style = options.style || this.config.defaultStyle;
    this.generateFortune(errorMessage, style);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ErrorFortune());
} else {
  new ErrorFortune();
}

// Export for external use
export default ErrorFortune;
