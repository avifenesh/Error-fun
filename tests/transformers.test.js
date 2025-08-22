/**
 * Tests for error message transformers
 */

import { 
  confuciusTransformer,
  haikuTransformer, 
  tarotTransformer,
  blameTransformer,
  zenTransformer,
  motivationalTransformer,
  techSupportTransformer
} from '../src/js/transformers.js';

describe('Error Message Transformers', () => {
  const testError = 'TypeError: Cannot read property "length" of undefined';
  
  test('confuciusTransformer returns wisdom', () => {
    const result = confuciusTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/confucius|ancient|wise/);
  });
  
  test('haikuTransformer returns haiku format', () => {
    const result = haikuTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result).toMatch(/<br>/); // Haiku should have line breaks
  });
  
  test('tarotTransformer returns mystical reading', () => {
    const result = tarotTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/tarot|reveals|position/);
    expect(result).toMatch(/<strong>/); // Should have formatted card name
  });
  
  test('blameTransformer deflects blame creatively', () => {
    const result = blameTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/cosmic|quantum|mercury|solar|butterfly/);
  });
  
  test('zenTransformer provides meditation', () => {
    const result = zenTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/breathe|wisdom|understanding|path|meditation/);
  });
  
  test('motivationalTransformer motivates', () => {
    const result = motivationalTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result).toMatch(/<strong>/); // Should have formatted title
    expect(result).toMatch(/<br>/); // Should have line breaks
  });
  
  test('techSupportTransformer gives support response', () => {
    const result = techSupportTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/try|restart|check|problem|error/);
  });
  
  test('all transformers handle different error types', () => {
    const errors = [
      'ReferenceError: x is not defined',
      'SyntaxError: Unexpected token {',
      'RangeError: Maximum call stack size exceeded',
      'Error: Network request failed'
    ];
    
    errors.forEach(error => {
      expect(() => confuciusTransformer(error)).not.toThrow();
      expect(() => haikuTransformer(error)).not.toThrow();
      expect(() => tarotTransformer(error)).not.toThrow();
      expect(() => blameTransformer(error)).not.toThrow();
      expect(() => zenTransformer(error)).not.toThrow();
      expect(() => motivationalTransformer(error)).not.toThrow();
      expect(() => techSupportTransformer(error)).not.toThrow();
    });
  });
  
  test('transformers handle empty or malformed input gracefully', () => {
    const badInputs = ['', '   ', 'JustSomeText', ':NoErrorType'];
    
    badInputs.forEach(input => {
      expect(() => confuciusTransformer(input)).not.toThrow();
      expect(() => haikuTransformer(input)).not.toThrow();
      expect(() => tarotTransformer(input)).not.toThrow();
      expect(() => blameTransformer(input)).not.toThrow();
      expect(() => zenTransformer(input)).not.toThrow();
      expect(() => motivationalTransformer(input)).not.toThrow();
      expect(() => techSupportTransformer(input)).not.toThrow();
    });
  });
});
