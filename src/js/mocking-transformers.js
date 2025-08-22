
/**
 * Error message transformers for Fortune Cookies - Mocking Category
 * Each transformer takes an error message and returns a humorous, mocking fortune
 */

/**
 * Transform error into a mocking-style wisdom
 */
export function mockingTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  
  const templates = [
    "Wow, a '{error}'? And I thought my jokes were bad.",
    "I've seen better error handling in a 'hello world' tutorial.",
    "Is that a '{error}' or are you just trying to communicate with me in your native language?",
    "I'm not saying it's a bad error, but even my toaster is laughing at that '{error}'.",
    "A '{error}'? Really? Did you even try to read the documentation?",
    "I'd call that a rookie mistake, but I don't want to insult the rookies.",
    "Congratulations on your '{error}'. You've managed to fail in a new and interesting way.",
    "I'm not mad, I'm just disappointed. And a little bit amused by your '{error}'.",
    "That's not a bug, it's a feature. A feature that makes me question your life choices.",
    "I've seen more elegant solutions in a bowl of spaghetti code."
  ];
  
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace('{error}', errorType);
}

// Export all transformers
export const transformers = {
  mocking: mockingTransformer,
};

export default transformers;
