/**
 * Error Fortune Cookies - Minimal Application
 * Clean implementation focusing only on core functionality
 */

import { transformers } from './transformers.js';

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
      fortuneText: document.getElementById('fortuneText'),
      cookieElement: document.querySelector('.cookie'),
      sampleButton: document.getElementById('sampleButton')
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
      this.elements.sampleButton.addEventListener('click', () => this.loadSample());
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
    
    if (this.elements.fortuneText) {
      this.elements.fortuneText.innerHTML = fortune;
    }
    
    // Show the fortune display
    if (this.elements.fortuneDisplay) {
      this.elements.fortuneDisplay.style.display = 'block';
      
      // Simple animation for the cookie
      if (this.elements.cookieElement) {
        this.elements.cookieElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
          this.elements.cookieElement.style.transform = 'scale(1)';
        }, 200);
      }
      
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
      "TypeError: Object.assign is not a function"
    ];
    
    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    
    if (this.elements.errorInput) {
      this.elements.errorInput.value = randomSample;
      this.elements.errorInput.focus();
    }
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
