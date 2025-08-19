/**
 * Tests for the Error Message Fortune Cookies animator
 */

import CookieAnimator from '../src/js/ui/animations';

describe('CookieAnimator', () => {
  let animator;
  
  beforeEach(() => {
    animator = new CookieAnimator();
  });
  
  test('should create an instance with default options', () => {
    expect(animator).toBeInstanceOf(CookieAnimator);
    expect(animator.options).toBeDefined();
    expect(animator.animationsEnabled).toBe(true);
  });
  
  test('should allow disabling animations', () => {
    animator.setAnimationsEnabled(false);
    expect(animator.animationsEnabled).toBe(false);
  });
  
  test('should create cookie SVG', () => {
    const svg = animator.createCookieSVG();
    expect(typeof svg).toBe('string');
    expect(svg).toContain('<svg');
    expect(svg).toContain('cookie-top');
    expect(svg).toContain('cookie-bottom');
    expect(svg).toContain('fortune-paper');
  });
  
  test('should create non-animated SVG when animations disabled', () => {
    animator.setAnimationsEnabled(false);
    const svg = animator.createCookieSVG();
    expect(svg).not.toContain('animated');
  });
  
  test('crackCookie should return a promise', () => {
    const mockElement = { classList: { add: jest.fn() } };
    const promise = animator.crackCookie(mockElement);
    expect(promise).toBeInstanceOf(Promise);
  });
  
  test('showFortune should return a promise', () => {
    const mockElement = { classList: { add: jest.fn() } };
    const promise = animator.showFortune(mockElement);
    expect(promise).toBeInstanceOf(Promise);
  });
  
  test('reset should remove classes', () => {
    const mockCookie = { classList: { remove: jest.fn() } };
    const mockFortune = { classList: { remove: jest.fn() } };
    
    animator.reset(mockCookie, mockFortune);
    
    expect(mockCookie.classList.remove).toHaveBeenCalledWith('cracked');
    expect(mockFortune.classList.remove).toHaveBeenCalledWith('visible');
  });
});