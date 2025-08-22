
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
    "I've seen more elegant solutions in a bowl of spaghetti code.",
    "Ah, a classic '{error}'. It's like the 'Stairway to Heaven' of programming errors.",
    "A '{error}'? You're basically telling the computer 'I have no idea what I'm doing'.",
    "I see you've discovered the '{error}' error. It's a rite of passage. A painful, painful rite of passage.",
    "The code is trying to tell you something with that '{error}'. It's saying 'please, make it stop'.",
    "I'm not sure what's more broken, your code or my spirit after seeing that '{error}'.",
    "You've unlocked the '{error}' achievement. The reward is a deep sense of shame.",
    "Is that a '{error}' in your code, or are you just happy to see me?",
    "I'd help you with that '{error}', but I'm afraid it might be contagious.",
    "Your code is like a fine wine. It gets more errors with age. Especially '{error}'.",
    "They say the definition of insanity is doing the same thing over and over and expecting a different result. You and your '{error}' are living proof."
  ];
  
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace('{error}', errorType);
}

// Export all transformers
export const transformers = {
  mocking: mockingTransformer,
};

export default transformers;
