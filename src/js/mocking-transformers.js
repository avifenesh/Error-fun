
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
    "They say the definition of insanity is doing the same thing over and over and expecting a different result. You and your '{error}' are living proof.",
    "A '{error}'? That's like trying to use a fork to eat soup. Technically possible, but why would you?",
    "I've seen better error handling in a calculator from the 1980s. At least it had a 'divide by zero' error.",
    "Your '{error}' is so basic, it's like the compiler is saying 'I can't even with you right now.'",
    "This '{error}' is like a programming haiku: 'Code does not work / Developer is confused / Stack Overflow time'",
    "I'm not saying your code is bad, but even a broken clock is right twice a day. Your code is like a broken sundial.",
    "A '{error}'? You must be one of those developers who thinks 'it works on my machine' is a valid excuse.",
    "Your '{error}' is so predictable, I could write a test for it. Oh wait, you probably already did.",
    "I see you've mastered the art of creating new and exciting ways to break things. The '{error}' is your masterpiece.",
    "This '{error}' is like a programming horror story: 'The variable that wouldn't die.'",
    "Your code is like a mystery novel where the detective is also the murderer. The '{error}' is the smoking gun.",
    "I've seen more organized chaos in a JavaScript framework's source code than in your '{error}'.",
    "The '{error}' is like a programming Rorschach test - everyone sees something different, but it's all broken.",
    "Your code is like a comedy show where the '{error}' is the punchline. Unfortunately, it's not funny.",
    "I'm not sure if you're writing code or creating a modern art installation called 'The Beauty of Broken Logic.'",
    "The '{error}' is like a programming ghost story - it haunts your code and refuses to leave.",
    "Your code is like a recipe where you forgot to add the main ingredient. The '{error}' is the taste of disappointment.",
    "I've seen better error messages in a fortune cookie. At least those are intentionally cryptic.",
    "The '{error}' is like a programming urban legend - everyone's heard of it, but no one knows how to fix it.",
    "Your code is like a puzzle where the pieces don't fit together. The '{error}' is the missing piece that explains everything.",
    "I'm not saying your code is a disaster, but the '{error}' is like the cherry on top of a very messy sundae.",
    "The '{error}' is like a programming prophecy - it tells you exactly what's wrong, but you still can't fix it.",
    "Your code is like a magic show where the '{error}' is the disappearing act. Unfortunately, the code disappears too."
  ];
  
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace('{error}', errorType);
}

// Export all transformers
export const transformers = {
  mocking: mockingTransformer,
};

export default transformers;
