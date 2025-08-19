/**
 * Tests for the Error Message Fortune Cookies transformers
 */

import {
  confuciusTransformer,
  haikuTransformer,
  blameTransformer,
  tarotTransformer,
  motivationalTransformer
} from '../src/js/core/transformers';

describe('Fortune Transformers', () => {
  const testError = "TypeError: Cannot read property 'length' of undefined";
  
  describe('confuciusTransformer', () => {
    test('should return a string', () => {
      const result = confuciusTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include wisdom related to the error', () => {
      const result = confuciusTransformer(testError);
      // Check for any of these common words in Confucius wisdom
      const hasWisdomTerms = [
        'Confucius', 'wisdom', 'ancient', 'path', 'garden', 
        'enlightenment', 'developer', 'find', 'measure'
      ].some(term => result.includes(term));
      
      expect(hasWisdomTerms).toBe(true);
    });
  });
  
  describe('haikuTransformer', () => {
    test('should return a string', () => {
      const result = haikuTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should format as haiku with line breaks', () => {
      const result = haikuTransformer(testError);
      expect(result).toContain('<br>');
    });
  });
  
  describe('blameTransformer', () => {
    test('should return a string', () => {
      const result = blameTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should provide an excuse', () => {
      const result = blameTransformer(testError);
      expect(result.length).toBeGreaterThan(20);
    });
  });
  
  describe('tarotTransformer', () => {
    test('should return a string', () => {
      const result = tarotTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should mention a card or position', () => {
      const result = tarotTransformer(testError);
      // Check for any tarot-related terms
      const hasTarotTerms = [
        'card', 'Card', 'position', 'upright', 'reverse', 
        'alignment', 'reveals', 'tarot', 'Tarot'
      ].some(term => result.includes(term));
      
      expect(hasTarotTerms).toBe(true);
    });
  });
  
  describe('motivationalTransformer', () => {
    test('should return a string', () => {
      const result = motivationalTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include HTML formatting', () => {
      const result = motivationalTransformer(testError);
      expect(result).toContain('<strong>');
    });
  });
});