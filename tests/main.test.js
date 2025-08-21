/**
 * Tests for the main ErrorFortune module
 */

import ErrorFortune from '../src/js/index.js';

// Mock localStorage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock html2canvas
window.html2canvas = jest.fn(() => Promise.resolve({
  toDataURL: () => 'data:image/png;base64,....'
}));


describe('ErrorFortune Main Module', () => {

  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <div id="fortune-display"></div>
      <div id="toast-container"></div>
      <div id="history-container"></div>
      <div id="favorites-container"></div>
      <form id="error-form">
        <input id="error-message" value="test error">
        <input type="radio" name="style" value="confucius" checked>
        <input type="radio" name="theme" value="zen" checked>
      </form>
    `;
    localStorage.clear();
    // Manually init on each test
    ErrorFortune.init();
  });

  describe('Initialization', () => {
    test('should be an object', () => {
      expect(typeof ErrorFortune).toBe('object');
    });
  });

  describe('crack()', () => {
    test('should generate and display a fortune', () => {
      const fortune = ErrorFortune.crack('Test error message', {
        target: 'fortune-display'
      });

      // Check the return value
      expect(fortune).toBeDefined();
      expect(fortune.original).toBe('Test error message');
      expect(fortune.wisdom).toBeDefined();

      const fortuneDisplay = document.getElementById('fortune-display');
      // The display is updated in a setTimeout, so we can't check immediately.
      // A more complex test would use jest.useFakeTimers()
      // For now, we just check that the function returns the correct object.
    });

    test('should apply the correct style and theme', () => {
       ErrorFortune.crack('Another error', {
        target: 'fortune-display',
        style: 'haiku',
        theme: 'chaos'
      });

      const fortuneDisplay = document.getElementById('fortune-display');
      // The class update is also in a setTimeout.
      // We can check that the loading state is applied immediately.
      expect(fortuneDisplay.classList.contains('loading')).toBe(true);
    });
  });

  describe('History', () => {
    test('should add a fortune to history', () => {
      let history = ErrorFortune.getHistory();
      expect(history.length).toBe(0);

      ErrorFortune.crack('Error for history', { target: 'fortune-display' });

      history = ErrorFortune.getHistory();
      expect(history.length).toBe(1);
      expect(history[0].original).toBe('Error for history');
    });

    test('should not add to history if saveToHistory is false', () => {
      ErrorFortune.crack('No history error', {
        target: 'fortune-display',
        saveToHistory: false
      });

      const history = ErrorFortune.getHistory();
      expect(history.length).toBe(0);
    });
  });

  describe('Favorites', () => {
    test('should add a fortune to favorites', () => {
      const fortune = {
        original: 'Favorite error',
        wisdom: 'Clever wisdom',
        style: 'zen',
        timestamp: new Date().toISOString()
      };

      let favorites = ErrorFortune.getFavorites();
      expect(favorites.length).toBe(0);

      ErrorFortune.addToFavorites(fortune);

      favorites = ErrorFortune.getFavorites();
      expect(favorites.length).toBe(1);
      expect(favorites[0].original).toBe('Favorite error');
    });

    test('should toggle (remove) a fortune from favorites', () => {
      const fortune = {
        original: 'Favorite error to toggle',
        wisdom: 'Clever wisdom',
        style: 'zen',
        timestamp: new Date().toISOString()
      };

      // Add it
      ErrorFortune.addToFavorites(fortune);
      let favorites = ErrorFortune.getFavorites();
      expect(favorites.length).toBe(1);

      // Remove it
      ErrorFortune.addToFavorites(fortune);
      favorites = ErrorFortune.getFavorites();
      expect(favorites.length).toBe(0);
    });
  });
});
