// Main entry point for Error Message Fortune Cookies
import { 
  confuciusTransformer,
  haikuTransformer,
  blameTransformer,
  tarotTransformer,
  motivationalTransformer,
  techSupportTransformer,
  poeticTransformer,
  zenTransformer,
  shakespeareanTransformer,
  filmNoirTransformer,
  sciFiTransformer,
  pirateTransformer,
  westernTransformer,
  superheroTransformer,
  fantasyTransformer,
  bMovieTransformer,
  influencerTransformer,
  legalTransformer,
  recipeTransformer,
  sportsTransformer
} from './core/transformers.js';
import CookieAnimator from './ui/animations.js';
import html2canvas from 'html2canvas';

// Namespace for the application
const ErrorFortune = (function() {
  // Private variables
  let config = {
    animation: true,
    defaultStyle: 'confucius',
    defaultTheme: 'zen',
    maxHistory: 10,
    maxFavorites: 20
  };
  
  // Cache DOM elements
  let elements = {};
  
  // Initialize animator
  const animator = new CookieAnimator();
  
  /**
   * Initialize the application
   * @param {Object} options - Configuration options
   */
  function init(options = {}) {
    // Merge options with defaults
    config = { ...config, ...options };
    
    // Set animation state
    animator.setAnimationsEnabled(config.animation);
    
    // Cache DOM elements
    cacheElements();
    
    // Set up event listeners
    bindEvents();
    
    // Initialize custom elements
    initCustomElements();
    
    // Initialize tooltips
    initTooltips();
    
    // Setup system theme detection
    setupSystemThemeDetection();
    
    // Initialize storage
    initStorage();
    
    // Check for URL parameters
    checkUrlParameters();
    
    // Add skip link for accessibility
    addSkipLink();
    
    // Optimize performance
    optimizePerformance();
    
    console.log('Error Fortune Cookies initialized');
  }
  
  /**
   * Add skip link for accessibility
   */
  function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#fortune-display';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to fortune display';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  /**
   * Optimize performance
   */
  function optimizePerformance() {
    // Use requestIdleCallback for non-critical operations
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Preload html2canvas for faster image generation
        import('html2canvas').catch(err => console.error('Error preloading html2canvas:', err));
        
        // Clean up old data
        cleanupOldData();
      });
    }
    
    // Use IntersectionObserver for lazy loading
    if ('IntersectionObserver' in window) {
      const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            if (section.id === 'history-section') {
              loadHistory();
            } else if (section.id === 'favorites-section') {
              loadFavorites();
            }
            observer.unobserve(section);
          }
        });
      });
      
      // Observe history and favorites sections
      const historySectionEl = document.getElementById('history-section');
      const favoritesSectionEl = document.getElementById('favorites-section');
      
      if (historySectionEl) lazyLoadObserver.observe(historySectionEl);
      if (favoritesSectionEl) lazyLoadObserver.observe(favoritesSectionEl);
    }
  }
  
  /**
   * Clean up old data
   */
  function cleanupOldData() {
    try {
      // Clean up history if it's too large
      let history = getHistory();
      if (history.length > config.maxHistory * 2) {
        history = history.slice(0, config.maxHistory);
        localStorage.setItem('errorFortuneHistory', JSON.stringify(history));
      }
      
      // Clean up favorites if it's too large
      let favorites = getFavorites();
      if (favorites.length > config.maxFavorites * 2) {
        favorites = favorites.slice(0, config.maxFavorites);
        localStorage.setItem('errorFortuneFavorites', JSON.stringify(favorites));
      }
    } catch (error) {
      console.error('Error cleaning up old data:', error);
    }
  }
  
  /**
   * Initialize storage for history and favorites
   */
  function initStorage() {
    // Create history container if it doesn't exist
    if (!elements.historyContainer) {
      elements.historyContainer = document.getElementById('history-container');
    }
    
    // Create favorites container if it doesn't exist
    if (!elements.favoritesContainer) {
      elements.favoritesContainer = document.getElementById('favorites-container');
    }
    
    // Load and display history and favorites
    if (elements.historyContainer) {
      loadHistory();
    }
    
    if (elements.favoritesContainer) {
      loadFavorites();
    }
  }
  
  /**
   * Setup system theme detection
   */
  function setupSystemThemeDetection() {
    // Check if we should use system theme
    const useSystemTheme = document.getElementById('use-system-theme');
    
    if (useSystemTheme) {
      // Set initial state based on localStorage
      const savedPreference = localStorage.getItem('useSystemTheme');
      useSystemTheme.checked = savedPreference === null ? true : savedPreference === 'true';
      
      // Apply system theme if enabled
      if (useSystemTheme.checked) {
        applySystemTheme();
      }
      
      // Add event listener for changes
      useSystemTheme.addEventListener('change', (e) => {
        localStorage.setItem('useSystemTheme', e.target.checked);
        
        if (e.target.checked) {
          applySystemTheme();
        }
      });
      
      // Listen for system theme changes
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkModeMediaQuery.addEventListener('change', () => {
        if (useSystemTheme.checked) {
          applySystemTheme();
        }
      });
    }
  }
  
  /**
   * Apply system theme based on user's OS preference
   */
  function applySystemTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToApply = isDarkMode ? 'dark' : 'light';
    
    // Set the theme radio button
    const themeRadio = document.querySelector('input[name="theme"][value="' + themeToApply + '"]');
    if (themeRadio) {
      themeRadio.checked = true;
    }
    
    // Update any active fortune display
    const fortuneDisplay = document.getElementById('fortune-display');
    if (fortuneDisplay && fortuneDisplay.classList.contains('fortune-display')) {
      // Remove existing theme classes
      ['zen', 'chaos', 'dark', 'light'].forEach(theme => {
        fortuneDisplay.classList.remove(theme);
      });
      
      // Add new theme class
      fortuneDisplay.classList.add(themeToApply);
    }
  }
  
  /**
   * Initialize tooltips for better UX
   */
  function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
      // Create tooltip element
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = element.getAttribute('data-tooltip');
      
      // Add tooltip to element
      element.appendChild(tooltip);
      
      // Add event listeners
      element.addEventListener('mouseenter', () => {
        tooltip.classList.add('visible');
      });
      
      element.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
      });
    });
  }
  
  /**
   * Cache DOM elements for later use
   */
  function cacheElements() {
    elements.form = document.getElementById('error-form');
    elements.errorInput = document.getElementById('error-message');
    elements.fortuneDisplay = document.getElementById('fortune-display');
    elements.fortuneActions = document.getElementById('fortune-actions');
    elements.embedSection = document.getElementById('embed-code-section');
    elements.embedCodeDisplay = document.getElementById('embed-code-display');
    elements.jsApiDisplay = document.getElementById('js-api-display');
    elements.historyContainer = document.getElementById('history-container');
    elements.favoritesContainer = document.getElementById('favorites-container');
  }
  
  /**
   * Set up event listeners
   */
  function bindEvents() {
    // Form submission
    if (elements.form) {
      elements.form.addEventListener('submit', handleFormSubmit);
    }
    
    // Action buttons
    if (elements.fortuneActions) {
      const copyImageBtn = document.getElementById('copy-image');
      if (copyImageBtn) copyImageBtn.addEventListener('click', copyAsImage);
      
      const copyLinkBtn = document.getElementById('copy-link');
      if (copyLinkBtn) copyLinkBtn.addEventListener('click', copyLink);
      
      const downloadBtn = document.getElementById('download');
      if (downloadBtn) downloadBtn.addEventListener('click', downloadFortune);
      
      const embedCodeBtn = document.getElementById('embed-code');
      if (embedCodeBtn) embedCodeBtn.addEventListener('click', showEmbedCode);
      
      // Social sharing buttons
      const twitterBtn = document.getElementById('share-twitter');
      if (twitterBtn) twitterBtn.addEventListener('click', () => shareToSocial('twitter'));
      
      const facebookBtn = document.getElementById('share-facebook');
      if (facebookBtn) facebookBtn.addEventListener('click', () => shareToSocial('facebook'));
      
      const linkedinBtn = document.getElementById('share-linkedin');
      if (linkedinBtn) linkedinBtn.addEventListener('click', () => shareToSocial('linkedin'));
    }
    
    // Copy buttons
    if (elements.embedSection) {
      const copyEmbedBtn = document.getElementById('copy-embed');
      if (copyEmbedBtn) {
        copyEmbedBtn.addEventListener('click', () => {
          copyToClipboard(elements.embedCodeDisplay.textContent);
          showToast('Embed code copied!');
        });
      }
      
      const copyJsBtn = document.getElementById('copy-js');
      if (copyJsBtn) {
        copyJsBtn.addEventListener('click', () => {
          copyToClipboard(elements.jsApiDisplay.textContent);
          showToast('API code copied!');
        });
      }
    }
  }
  
  /**
   * Check URL parameters for fortune generation
   */
  function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get('error');
    
    if (errorParam) {
      const style = urlParams.get('style') || config.defaultStyle;
      const theme = urlParams.get('theme') || config.defaultTheme;
      
      // Set form values
      if (elements.errorInput) {
        elements.errorInput.value = decodeURIComponent(errorParam);
      }
      
      // Set style radio
      const styleRadio = document.querySelector('input[name="style"][value="' + style + '"]');
      if (styleRadio) {
        styleRadio.checked = true;
      }
      
      // Set theme radio
      const themeRadio = document.querySelector('input[name="theme"][value="' + theme + '"]');
      if (themeRadio) {
        themeRadio.checked = true;
      }
      
      // Generate fortune
      setTimeout(() => {
        crack(decodeURIComponent(errorParam), {
          style,
          theme,
          target: 'fortune-display'
        });
      }, 500);
    }
  }
  
  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  function handleFormSubmit(e) {
    e.preventDefault();
    
    const errorMessage = elements.errorInput.value.trim();
    if (!errorMessage) {
      showValidationError(elements.errorInput, 'Please enter an error message');
      return;
    } else {
      clearValidationError(elements.errorInput);
    }
    
    const styleRadio = document.querySelector('input[name="style"]:checked');
    const themeRadio = document.querySelector('input[name="theme"]:checked');
    
    const style = styleRadio ? styleRadio.value : config.defaultStyle;
    const theme = themeRadio ? themeRadio.value : config.defaultTheme;
    
    crack(errorMessage, {
      style,
      theme,
      target: 'fortune-display'
    });
  }
  
  /**
   * Show validation error for an input
   * @param {HTMLElement} input - The input element
   * @param {string} message - The error message
   */
  function showValidationError(input, message) {
    // Clear any existing error
    clearValidationError(input);
    
    // Add error class to input
    input.classList.add('error-input');
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'validation-error';
    errorElement.textContent = message;
    
    // Insert after input
    input.parentNode.insertBefore(errorElement, input.nextSibling);
    
    // Focus input
    input.focus();
    
    // Add shake animation
    input.classList.add('shake');
    setTimeout(() => {
      input.classList.remove('shake');
    }, 500);
  }
  
  /**
   * Clear validation error for an input
   * @param {HTMLElement} input - The input element
   */
  function clearValidationError(input) {
    // Remove error class
    input.classList.remove('error-input');
    
    // Remove error message
    const errorElement = input.parentNode.querySelector('.validation-error');
    if (errorElement) {
      errorElement.parentNode.removeChild(errorElement);
    }
  }
  
  /**
   * Main function to generate and display a fortune
   * @param {string} errorMessage - The error message to transform
   * @param {Object} options - Configuration options
   */
  function crack(errorMessage, options = {}) {
    // Merge options with defaults
    const opts = {
      style: config.defaultStyle,
      theme: config.defaultTheme,
      animation: config.animation,
      target: null,
      callback: null,
      saveToHistory: true,
      ...options
    };
    
    // Show loading state if target is provided
    let targetElement = null;
    if (opts.target) {
      targetElement = typeof opts.target === 'string' 
        ? document.getElementById(opts.target) 
        : opts.target;
          
      if (targetElement) {
        showLoadingState(targetElement);
      }
    }
    
    // Generate the fortune (with error handling)
    let fortune;
    try {
      fortune = generateFortune(errorMessage, opts.style);
      
      // Save to history if enabled
      if (opts.saveToHistory) {
        addToHistory(fortune);
      }
      
      // Display the fortune
      if (targetElement) {
        // Use setTimeout to allow the loading animation to be visible
        setTimeout(() => {
          displayFortune(targetElement, fortune, opts);
          
          // Show action buttons
          if (elements.fortuneActions) {
            elements.fortuneActions.classList.remove('hidden');
          }
          
          // Update embed code
          updateEmbedCode(errorMessage, opts);
          
          // Execute callback if provided
          if (typeof opts.callback === 'function') {
            opts.callback(fortune);
          }
        }, 300);
      }
    } catch (error) {
      console.error('Error generating fortune:', error);
      
      // Show error state
      if (targetElement) {
        showErrorState(targetElement, error);
      }
      
      // Execute callback with error
      if (typeof opts.callback === 'function') {
        opts.callback(null, error);
      }
      
      return null;
    }
    
    return fortune;
  }
  
  /**
   * Show loading state in the target element
   * @param {HTMLElement} target - The element to show loading in
   */
  function showLoadingState(target) {
    // Add loading class
    target.className = 'fortune-display loading';
    
    // Create loading animation
    target.innerHTML = `
      <div class="loading-animation">
        <div class="cookie-loader">
          <div class="cookie-spinner"></div>
        </div>
        <p class="loading-text">Cracking fortune cookie...</p>
      </div>
    `;
  }
  
  /**
   * Show error state in the target element
   * @param {HTMLElement} target - The element to show error in
   * @param {Error} error - The error that occurred
   */
  function showErrorState(target, error) {
    // Add error class
    target.className = 'fortune-display error';
    
    // Create error message with fortune-style error
    target.innerHTML = `
      <div class="error-message">
        <div class="error-icon">🥠</div>
        <p class="error-text">Fortune Cookie Crumbled</p>
        <p class="error-details">Even fortune cookies have bad days. Your wisdom got lost in translation.</p>
        <button class="button small retry-button">Crack Another Cookie</button>
      </div>
    `;
    
    // Add retry button handler
    const retryButton = target.querySelector('.retry-button');
    if (retryButton) {
      retryButton.addEventListener('click', () => {
        // Trigger form submission
        if (elements.form) {
          elements.form.dispatchEvent(new Event('submit'));
        }
      });
    }
  }
  
  /**
   * Generate a fortune based on the error message and style
   * @param {string} errorMessage - The error message to transform
   * @param {string} style - The fortune style to use
   * @returns {Object} The generated fortune
   */
  function generateFortune(errorMessage, style) {
    // Get the appropriate transformer for the style
    const transformer = transformers[style] || transformers.confucius;
    
    // Transform the error message
    const wisdom = transformer(errorMessage);
    
    return {
      original: errorMessage,
      wisdom,
      style,
      timestamp: new Date().toISOString()
    };
  }
  
  /**
   * Display a fortune in the target element
   * @param {HTMLElement} target - The element to display the fortune in
   * @param {Object} fortune - The fortune to display
   * @param {Object} options - Display options
   */
  function displayFortune(target, fortune, options) {
    // Clear previous content
    target.innerHTML = '';
    
    // Add theme class
    target.className = `fortune-display ${options.theme}`;
    
    // Add ARIA attributes for accessibility
    target.setAttribute('role', 'region');
    target.setAttribute('aria-live', 'polite');
    target.setAttribute('aria-label', 'Fortune cookie result');
    
    // Create fortune elements
    const fortuneElement = document.createElement('div');
    fortuneElement.className = `fortune ${fortune.style}`;
    
    // Create cookie container
    const cookieContainer = document.createElement('div');
    cookieContainer.className = 'cookie-container';
    
    // Add cookie SVG
    cookieContainer.innerHTML = animator.createCookieSVG();
    
    // Create fortune content
    const fortuneContent = document.createElement('div');
    fortuneContent.className = 'fortune-content';
    
    // Add error message
    const errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.textContent = fortune.original;
    fortuneContent.appendChild(errorElement);
    
    // Add wisdom
    const wisdomElement = document.createElement('p');
    wisdomElement.className = 'wisdom';
    wisdomElement.innerHTML = fortune.wisdom;
    fortuneContent.appendChild(wisdomElement);
    
    // Assemble the fortune
    fortuneElement.appendChild(cookieContainer);
    fortuneElement.appendChild(fortuneContent);
    
    // Add to target
    target.appendChild(fortuneElement);
    
    // Add favorite button
    const favoriteBtn = document.createElement('button');
    favoriteBtn.id = 'favorite-fortune';
    favoriteBtn.className = 'button small favorite-btn';
    favoriteBtn.innerHTML = '★ Favorite';
    favoriteBtn.setAttribute('aria-label', 'Add to favorites');
    favoriteBtn.addEventListener('click', () => addToFavorites(fortune));
    
    // Add favorite button to target
    target.appendChild(favoriteBtn);
    
    // Update favorite button state
    updateFavoriteButtonState(fortune);
    
    // Trigger animation
    const cookieElement = cookieContainer.querySelector('.cookie');
    animator.animateSequence(cookieElement, fortuneContent);
    
    // Announce to screen readers
    announceToScreenReader(`Fortune cookie cracked. Your error was: ${fortune.original}. Your fortune is: ${wisdomElement.textContent}`);
  }
  
  /**
   * Update the embed code displays
   * @param {string} errorMessage - The error message
   * @param {Object} options - The options used
   */
  function updateEmbedCode(errorMessage, options) {
    if (elements.embedCodeDisplay) {
      elements.embedCodeDisplay.textContent = 
        `<error-fortune message="${escapeHtml(errorMessage)}" style="${options.style}" theme="${options.theme}"></error-fortune>`;
    }
    
    if (elements.jsApiDisplay) {
      elements.jsApiDisplay.textContent = 
        `ErrorFortune.crack("${escapeHtml(errorMessage)}", {\n  style: "${options.style}",\n  theme: "${options.theme}"\n});`;
    }
  }
  
  /**
   * Show the embed code section
   */
  function showEmbedCode() {
    if (elements.embedSection) {
      elements.embedSection.classList.remove('hidden');
      // Scroll to embed section
      elements.embedSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  /**
   * Copy the current fortune as an image
   */
  function copyAsImage() {
    const fortuneDisplay = document.getElementById('fortune-display');
    if (!fortuneDisplay) return;
    
    // Show loading indicator
    const button = document.getElementById('copy-image');
    const originalText = button.textContent;
    button.textContent = 'Generating...';
    button.disabled = true;
    
    // Generate image
    generateFortuneImage(fortuneDisplay)
      .then(imageUrl => {
        // Copy to clipboard using Clipboard API
        fetch(imageUrl)
          .then(res => res.blob())
          .then(blob => {
            try {
              navigator.clipboard.write([
                new ClipboardItem({
                  'image/png': blob
                })
              ]).then(() => {
                showToast('Image copied to clipboard!');
              }).catch(err => {
                console.error('Could not copy image: ', err);
                // Fallback - open image in new tab
                window.open(imageUrl, '_blank');
              });
            } catch (err) {
              console.error('Clipboard API not supported: ', err);
              // Fallback - open image in new tab
              window.open(imageUrl, '_blank');
            }
          });
      })
      .catch(err => {
        console.error('Error generating image: ', err);
        showToast('Could not generate image', 'error');
      })
      .finally(() => {
        // Restore button
        button.textContent = originalText;
        button.disabled = false;
      });
  }
  
  /**
   * Download the current fortune as an image
   */
  function downloadFortune() {
    const fortuneDisplay = document.getElementById('fortune-display');
    if (!fortuneDisplay) return;
    
    // Show loading indicator
    const button = document.getElementById('download');
    const originalText = button.textContent;
    button.textContent = 'Generating...';
    button.disabled = true;
    
    // Generate image
    generateFortuneImage(fortuneDisplay)
      .then(imageUrl => {
        // Create download link
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `fortune-cookie-${new Date().getTime()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showToast('Fortune downloaded!');
      })
      .catch(err => {
        console.error('Error generating image: ', err);
        showToast('Could not generate image', 'error');
      })
      .finally(() => {
        // Restore button
        button.textContent = originalText;
        button.disabled = false;
      });
  }
  
  /**
   * Generate an image from a fortune element
   * @param {HTMLElement} element - The element to convert to an image
   * @returns {Promise<string>} - Promise resolving to the image URL
   */
  function generateFortuneImage(element) {
    return new Promise((resolve, reject) => {
      // Create a clone of the element to avoid modifying the original
      const clone = element.cloneNode(true);
      
      // Add special class for image generation
      clone.classList.add('for-image');
      
      // Append to body but hide it
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      clone.style.top = '-9999px';
      document.body.appendChild(clone);
      
      // Add branding to the clone
      const branding = document.createElement('div');
      branding.className = 'fortune-branding';
      branding.innerHTML = '<p>Error Message Fortune Cookies</p><p class="fortune-url">errorcookies.com</p>';
      clone.appendChild(branding);
      
      // Use html2canvas to convert to image
      html2canvas(clone, {
        backgroundColor: null,
        scale: 2, // Higher resolution
        logging: false,
        allowTaint: true,
        useCORS: true
      }).then(canvas => {
        // Convert canvas to image URL
        const imageUrl = canvas.toDataURL('image/png');
        
        // Clean up
        document.body.removeChild(clone);
        
        resolve(imageUrl);
      }).catch(err => {
        // Clean up on error
        if (document.body.contains(clone)) {
          document.body.removeChild(clone);
        }
        reject(err);
      });
    });
  }
  
  /**
   * Copy a shareable link to the current fortune
   */
  function copyLink() {
    const errorMessage = elements.errorInput.value.trim();
    const styleRadio = document.querySelector('input[name="style"]:checked');
    const themeRadio = document.querySelector('input[name="theme"]:checked');
    
    const style = styleRadio ? styleRadio.value : config.defaultStyle;
    const theme = themeRadio ? themeRadio.value : config.defaultTheme;
    
    // Create URL with parameters
    const url = new URL(window.location.href);
    url.searchParams.set('error', encodeURIComponent(errorMessage));
    url.searchParams.set('style', style);
    url.searchParams.set('theme', theme);
    
    copyToClipboard(url.toString());
    showToast('Link copied to clipboard!');
  }
  
  /**
   * Share fortune to social media
   * @param {string} platform - The social media platform to share to
   */
  function shareToSocial(platform) {
    const errorMessage = elements.errorInput.value.trim();
    const styleRadio = document.querySelector('input[name="style"]:checked');
    const themeRadio = document.querySelector('input[name="theme"]:checked');
    
    const style = styleRadio ? styleRadio.value : config.defaultStyle;
    const theme = themeRadio ? themeRadio.value : config.defaultTheme;
    
    // Create URL with parameters
    const url = new URL(window.location.href);
    url.searchParams.set('error', encodeURIComponent(errorMessage));
    url.searchParams.set('style', style);
    url.searchParams.set('theme', theme);
    
    const shareUrl = url.toString();
    const shareText = `Check out this fortune cookie wisdom for my error: "${errorMessage}" #ErrorCookies`;
    
    let shareWindow;
    
    switch (platform) {
      case 'twitter':
        shareWindow = window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          'share-twitter',
          'width=550,height=420,resizable=yes,scrollbars=yes'
        );
        break;
        
      case 'facebook':
        shareWindow = window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
          'share-facebook',
          'width=550,height=420,resizable=yes,scrollbars=yes'
        );
        break;
        
      case 'linkedin':
        shareWindow = window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
          'share-linkedin',
          'width=550,height=420,resizable=yes,scrollbars=yes'
        );
        break;
    }
    
    if (shareWindow) {
      shareWindow.focus();
    } else {
      showToast('Could not open share window. Please check your popup blocker settings.', 'error');
    }
  }
  
  /**
   * Show toast notification
   * @param {string} message - The message to show
   * @param {string} type - The type of toast (success, error, info)
   */
  function showToast(message, type = 'success') {
    // Check if toast container exists, create if not
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    // Add to container
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toastContainer.contains(toast)) {
          toastContainer.removeChild(toast);
        }
      }, 300);
    }, 3000);
  }
  
  /**
   * Copy text to clipboard
   * @param {string} text - The text to copy
   */
  function copyToClipboard(text) {
    // Use modern clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(err => {
        console.error('Could not copy text: ', err);
        fallbackCopyToClipboard(text);
      });
    } else {
      fallbackCopyToClipboard(text);
    }
  }
  
  /**
   * Fallback method to copy text to clipboard
   * @param {string} text - The text to copy
   */
  function fallbackCopyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: Could not copy text: ', err);
      alert('Could not copy to clipboard. Please copy manually.');
    }
    
    document.body.removeChild(textarea);
  }
  
  /**
   * Initialize custom elements for embedding
   */
  function initCustomElements() {
    if (window.customElements && !customElements.get('error-fortune')) {
      customElements.define('error-fortune', class extends HTMLElement {
        connectedCallback() {
          const message = this.getAttribute('message');
          const style = this.getAttribute('style') || config.defaultStyle;
          const theme = this.getAttribute('theme') || config.defaultTheme;
          const animation = this.hasAttribute('animation') ? 
            this.getAttribute('animation') !== 'false' : config.animation;
          
          if (message) {
            crack(message, {
              style,
              theme,
              animation,
              target: this
            });
          }
        }
      });
    }
  }
  
  /**
   * Escape HTML special characters
   * @param {string} html - The string to escape
   * @returns {string} The escaped string
   */
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }
  
  // Transformers for different fortune styles
  const transformers = {
    confucius: confuciusTransformer,
    haiku: haikuTransformer,
    tarot: tarotTransformer,
    blame: blameTransformer,
    motivational: motivationalTransformer,
    techSupport: techSupportTransformer,
    poetic: poeticTransformer,
    zen: zenTransformer,
    shakespeare: shakespeareanTransformer,
    filmNoir: filmNoirTransformer,
    sciFi: sciFiTransformer,
    pirate: pirateTransformer,
    western: westernTransformer,
    superhero: superheroTransformer,
    fantasy: fantasyTransformer,
    bMovie: bMovieTransformer,
    influencer: influencerTransformer,
    legal: legalTransformer,
    recipe: recipeTransformer,
    sports: sportsTransformer
  };
  
  /**
   * Add a fortune to history
   * @param {Object} fortune - The fortune to add
   */
  function addToHistory(fortune) {
    // Get existing history
    let history = getHistory();
    
    // Add new fortune to beginning
    history.unshift({
      ...fortune,
      id: Date.now().toString()
    });
    
    // Limit history size
    if (history.length > config.maxHistory) {
      history = history.slice(0, config.maxHistory);
    }
    
    // Save to localStorage
    localStorage.setItem('errorFortuneHistory', JSON.stringify(history));
    
    // Update UI if history container exists
    if (elements.historyContainer) {
      loadHistory();
    }
  }
  
  /**
   * Get fortune history from localStorage
   * @returns {Array} Array of fortune objects
   */
  function getHistory() {
    try {
      const history = localStorage.getItem('errorFortuneHistory');
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error loading history:', error);
      return [];
    }
  }
  
  /**
   * Load and display fortune history
   * @param {boolean} lazy - Whether to lazy load items
   */
  function loadHistory(lazy = true) {
    if (!elements.historyContainer) return;
    
    const history = getHistory();
    
    // Clear container
    elements.historyContainer.innerHTML = '';
    
    if (history.length === 0) {
      elements.historyContainer.innerHTML = '<p class="empty-message">No fortune history yet.</p>';
      return;
    }
    
    // Create history items
    if (lazy && history.length > 5) {
      // Only load first 5 items initially
      history.slice(0, 5).forEach(fortune => {
        const historyItem = createFortuneItem(fortune, 'history');
        elements.historyContainer.appendChild(historyItem);
      });
      
      // Add "load more" button if there are more items
      if (history.length > 5) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.className = 'button load-more-btn';
        loadMoreBtn.textContent = `Load ${history.length - 5} more items`;
        loadMoreBtn.addEventListener('click', () => {
          // Remove the button
          loadMoreBtn.remove();
          
          // Load remaining items
          history.slice(5).forEach(fortune => {
            const historyItem = createFortuneItem(fortune, 'history');
            elements.historyContainer.appendChild(historyItem);
          });
        });
        
        elements.historyContainer.appendChild(loadMoreBtn);
      }
    } else {
      // Load all items
      history.forEach(fortune => {
        const historyItem = createFortuneItem(fortune, 'history');
        elements.historyContainer.appendChild(historyItem);
      });
    }
  }
  
  /**
   * Add a fortune to favorites
   * @param {Object} fortune - The fortune to add
   */
  function addToFavorites(fortune) {
    // Get existing favorites
    let favorites = getFavorites();
    
    // Check if already in favorites
    const existingIndex = favorites.findIndex(f => 
      f.original === fortune.original && f.style === fortune.style);
    
    if (existingIndex >= 0) {
      // Already in favorites, remove it (toggle behavior)
      favorites.splice(existingIndex, 1);
      showToast('Removed from favorites');
    } else {
      // Add new fortune to beginning
      favorites.unshift({
        ...fortune,
        id: Date.now().toString()
      });
      
      // Limit favorites size
      if (favorites.length > config.maxFavorites) {
        favorites = favorites.slice(0, config.maxFavorites);
      }
      
      showToast('Added to favorites');
    }
    
    // Save to localStorage
    localStorage.setItem('errorFortuneFavorites', JSON.stringify(favorites));
    
    // Update UI if favorites container exists
    if (elements.favoritesContainer) {
      loadFavorites();
    }
    
    // Update favorite button state
    updateFavoriteButtonState(fortune);
  }
  
  /**
   * Get favorites from localStorage
   * @returns {Array} Array of fortune objects
   */
  function getFavorites() {
    try {
      const favorites = localStorage.getItem('errorFortuneFavorites');
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error loading favorites:', error);
      return [];
    }
  }
  
  /**
   * Load and display favorites
   * @param {boolean} lazy - Whether to lazy load items
   */
  function loadFavorites(lazy = true) {
    if (!elements.favoritesContainer) return;
    
    const favorites = getFavorites();
    
    // Clear container
    elements.favoritesContainer.innerHTML = '';
    
    if (favorites.length === 0) {
      elements.favoritesContainer.innerHTML = '<p class="empty-message">No favorites yet.</p>';
      return;
    }
    
    // Create favorite items
    if (lazy && favorites.length > 5) {
      // Only load first 5 items initially
      favorites.slice(0, 5).forEach(fortune => {
        const favoriteItem = createFortuneItem(fortune, 'favorite');
        elements.favoritesContainer.appendChild(favoriteItem);
      });
      
      // Add "load more" button if there are more items
      if (favorites.length > 5) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.className = 'button load-more-btn';
        loadMoreBtn.textContent = `Load ${favorites.length - 5} more items`;
        loadMoreBtn.addEventListener('click', () => {
          // Remove the button
          loadMoreBtn.remove();
          
          // Load remaining items
          favorites.slice(5).forEach(fortune => {
            const favoriteItem = createFortuneItem(fortune, 'favorite');
            elements.favoritesContainer.appendChild(favoriteItem);
          });
        });
        
        elements.favoritesContainer.appendChild(loadMoreBtn);
      }
    } else {
      // Load all items
      favorites.forEach(fortune => {
        const favoriteItem = createFortuneItem(fortune, 'favorite');
        elements.favoritesContainer.appendChild(favoriteItem);
      });
    }
  }
  
  /**
   * Create a fortune item element for history or favorites
   * @param {Object} fortune - The fortune object
   * @param {string} type - The type of item ('history' or 'favorite')
   * @returns {HTMLElement} The created element
   */
  function createFortuneItem(fortune, type) {
    const item = document.createElement('div');
    item.className = `fortune-item ${type}-item`;
    item.dataset.id = fortune.id;
    item.setAttribute('tabindex', '0'); // Make focusable for keyboard navigation
    item.setAttribute('role', 'article'); // ARIA role for screen readers
    
    const header = document.createElement('div');
    header.className = 'fortune-item-header';
    
    const timestamp = new Date(fortune.timestamp).toLocaleString();
    
    header.innerHTML = `
      <div class="fortune-item-style">${fortune.style}</div>
      <div class="fortune-item-time">${timestamp}</div>
    `;
    
    const content = document.createElement('div');
    content.className = 'fortune-item-content';
    
    content.innerHTML = `
      <div class="fortune-item-error">${fortune.original}</div>
      <div class="fortune-item-wisdom">${fortune.wisdom}</div>
    `;
    
    const actions = document.createElement('div');
    actions.className = 'fortune-item-actions';
    
    if (type === 'history') {
      actions.innerHTML = `
        <button class="button small favorite-btn" title="Add to favorites" aria-label="Add to favorites">★</button>
        <button class="button small restore-btn" title="Restore this fortune" aria-label="Restore this fortune">Restore</button>
      `;
      
      // Add event listeners
      actions.querySelector('.favorite-btn').addEventListener('click', () => {
        addToFavorites(fortune);
      });
      
      actions.querySelector('.restore-btn').addEventListener('click', () => {
        restoreFortune(fortune);
      });
    } else {
      actions.innerHTML = `
        <button class="button small remove-btn" title="Remove from favorites" aria-label="Remove from favorites">✕</button>
        <button class="button small restore-btn" title="Restore this fortune" aria-label="Restore this fortune">Restore</button>
      `;
      
      // Add event listeners
      actions.querySelector('.remove-btn').addEventListener('click', () => {
        addToFavorites(fortune); // This will toggle it off
      });
      
      actions.querySelector('.restore-btn').addEventListener('click', () => {
        restoreFortune(fortune);
      });
    }
    
    item.appendChild(header);
    item.appendChild(content);
    item.appendChild(actions);
    
    // Add keyboard navigation
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        restoreFortune(fortune);
        e.preventDefault();
      }
    });
    
    return item;
  }
  
  /**
   * Restore a fortune from history or favorites
   * @param {Object} fortune - The fortune to restore
   */
  function restoreFortune(fortune) {
    // Set form values
    if (elements.errorInput) {
      elements.errorInput.value = fortune.original;
    }
    
    // Set style radio
    const styleRadio = document.querySelector('input[name="style"][value="' + fortune.style + '"]');
    if (styleRadio) {
      styleRadio.checked = true;
    }
    
    // Generate fortune without saving to history (to avoid duplication)
    crack(fortune.original, {
      style: fortune.style,
      target: 'fortune-display',
      saveToHistory: false
    });
    
    // Scroll to fortune display
    elements.fortuneDisplay.scrollIntoView({ behavior: 'smooth' });
  }
  
  /**
   * Update favorite button state based on whether fortune is in favorites
   * @param {Object} fortune - The current fortune
   */
  function updateFavoriteButtonState(fortune) {
    const favoriteBtn = document.getElementById('favorite-fortune');
    if (!favoriteBtn) return;
    
    const favorites = getFavorites();
    const isFavorite = favorites.some(f => 
      f.original === fortune.original && f.style === fortune.style);
    
    if (isFavorite) {
      favoriteBtn.classList.add('active');
      favoriteBtn.title = 'Remove from favorites';
      favoriteBtn.setAttribute('aria-label', 'Remove from favorites');
      favoriteBtn.innerHTML = '★ Remove favorite';
    } else {
      favoriteBtn.classList.remove('active');
      favoriteBtn.title = 'Add to favorites';
      favoriteBtn.setAttribute('aria-label', 'Add to favorites');
      favoriteBtn.innerHTML = '★ Add favorite';
    }
  }
  
  /**
   * Announce a message to screen readers
   * @param {string} message - The message to announce
   */
  function announceToScreenReader(message) {
    // Create or get the live region
    let liveRegion = document.getElementById('sr-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'sr-live-region';
      liveRegion.className = 'sr-only';
      liveRegion.setAttribute('aria-live', 'assertive');
      liveRegion.setAttribute('aria-atomic', 'true');
      document.body.appendChild(liveRegion);
    }
    
    // Set the message
    liveRegion.textContent = message;
    
    // Clear after a delay
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 3000);
  }
  
  /**
   * Export history and favorites to a JSON file
   */
  function exportData() {
    const data = {
      history: getHistory(),
      favorites: getFavorites(),
      exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `error-fortune-data-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showToast('Data exported successfully');
  }
  
  /**
   * Import history and favorites from a JSON file
   * @param {File} file - The JSON file to import
   */
  function importData(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      try {
        const data = JSON.parse(e.target.result);
        
        if (data.history && Array.isArray(data.history)) {
          localStorage.setItem('errorFortuneHistory', JSON.stringify(data.history));
        }
        
        if (data.favorites && Array.isArray(data.favorites)) {
          localStorage.setItem('errorFortuneFavorites', JSON.stringify(data.favorites));
        }
        
        // Reload data
        loadHistory();
        loadFavorites();
        
        showToast('Data imported successfully');
      } catch (error) {
        console.error('Error importing data:', error);
        showToast('Error importing data. Invalid format.', 'error');
      }
    };
    
    reader.readAsText(file);
  }
  
  // Public API
  return {
    init,
    crack,
    transformers,
    addToFavorites,
    exportData,
    importData,
    getHistory,
    getFavorites
  };
})();

// Auto-initialize if in browser context
if (typeof window !== 'undefined') {
  window.ErrorFortune = ErrorFortune;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ErrorFortune.init());
  } else {
    ErrorFortune.init();
  }
}

export default ErrorFortune;
