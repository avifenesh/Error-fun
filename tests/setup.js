// Jest setup file
global.fetch = jest.fn();

// Mock for document.createElement
document.createElement = jest.fn().mockImplementation((tag) => {
  const element = {
    classList: {
      add: jest.fn(),
      remove: jest.fn()
    },
    style: {},
    appendChild: jest.fn(),
    textContent: '',
    innerHTML: '',
    setAttribute: jest.fn(),
    getAttribute: jest.fn(),
    hasAttribute: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    select: jest.fn(),
    scrollIntoView: jest.fn()
  };
  
  return element;
});