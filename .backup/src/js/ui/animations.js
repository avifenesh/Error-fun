// Animation controller for Error Message Fortune Cookies
// Handles all cookie animations and transitions

/**
 * Animation controller for fortune cookies
 */
class CookieAnimator {
  /**
   * Create a new cookie animator
   * @param {Object} options - Animation options
   */
  constructor(options = {}) {
    this.options = {
      crackDuration: 500,
      paperDuration: 300,
      paperDelay: 300,
      ...options
    };
    
    this.animationsEnabled = true;
  }
  
  /**
   * Enable or disable animations
   * @param {boolean} enabled - Whether animations should be enabled
   */
  setAnimationsEnabled(enabled) {
    this.animationsEnabled = enabled;
  }
  
  /**
   * Create the cookie SVG element
   * @returns {string} SVG HTML
   */
  createCookieSVG() {
    const animClass = this.animationsEnabled ? 'animated' : '';
    
    return `
      <div class="cookie ${animClass}">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Cookie top half with texture -->
          <path class="cookie-top" d="M20,50 Q100,10 180,50" stroke="#D2B48C" stroke-width="10" fill="#F5DEB3" />
          <circle class="cookie-chip" cx="50" cy="35" r="4" fill="#8B4513" />
          <circle class="cookie-chip" cx="80" cy="25" r="3" fill="#8B4513" />
          <circle class="cookie-chip" cx="120" cy="25" r="4" fill="#8B4513" />
          <circle class="cookie-chip" cx="150" cy="35" r="3" fill="#8B4513" />
          
          <!-- Cookie bottom half with texture -->
          <path class="cookie-bottom" d="M20,50 Q100,90 180,50" stroke="#D2B48C" stroke-width="10" fill="#F5DEB3" />
          <circle class="cookie-chip" cx="60" cy="65" r="3" fill="#8B4513" />
          <circle class="cookie-chip" cx="100" cy="75" r="4" fill="#8B4513" />
          <circle class="cookie-chip" cx="140" cy="65" r="3" fill="#8B4513" />
          
          <!-- Fortune paper with fold -->
          <path class="fortune-paper" d="M85,50 L115,50 L115,20 L100,30 L85,20 Z" fill="white" stroke="#EEEEEE" stroke-width="1" />
          <line class="fortune-fold" x1="100" y1="30" x2="100" y2="50" stroke="#EEEEEE" stroke-width="1" />
        </svg>
      </div>
    `;
  }
  
  /**
   * Animate the cookie cracking open
   * @param {HTMLElement} cookieElement - The cookie element to animate
   * @returns {Promise} Promise that resolves when animation is complete
   */
  crackCookie(cookieElement) {
    return new Promise((resolve) => {
      if (!this.animationsEnabled) {
        cookieElement.classList.add('cracked');
        resolve();
        return;
      }
      
      // Add cracked class after a small delay
      setTimeout(() => {
        cookieElement.classList.add('cracked');
        
        // Resolve after animation completes
        setTimeout(resolve, this.options.crackDuration);
      }, 50);
    });
  }
  
  /**
   * Animate the fortune paper appearing
   * @param {HTMLElement} fortuneContent - The fortune content element
   * @returns {Promise} Promise that resolves when animation is complete
   */
  showFortune(fortuneContent) {
    return new Promise((resolve) => {
      if (!this.animationsEnabled) {
        fortuneContent.classList.add('visible');
        resolve();
        return;
      }
      
      // Show fortune after paper animation delay
      setTimeout(() => {
        fortuneContent.classList.add('visible');
        
        // Resolve after animation completes
        setTimeout(resolve, this.options.paperDuration);
      }, this.options.paperDelay);
    });
  }
  
  /**
   * Perform the complete cookie animation sequence
   * @param {HTMLElement} cookieElement - The cookie element
   * @param {HTMLElement} fortuneContent - The fortune content element
   * @returns {Promise} Promise that resolves when all animations are complete
   */
  async animateSequence(cookieElement, fortuneContent) {
    // First crack the cookie
    await this.crackCookie(cookieElement);
    
    // Then show the fortune
    await this.showFortune(fortuneContent);
    
    return true;
  }
  
  /**
   * Reset animations to initial state
   * @param {HTMLElement} cookieElement - The cookie element
   * @param {HTMLElement} fortuneContent - The fortune content element
   */
  reset(cookieElement, fortuneContent) {
    cookieElement.classList.remove('cracked');
    fortuneContent.classList.remove('visible');
  }
}

export default CookieAnimator;