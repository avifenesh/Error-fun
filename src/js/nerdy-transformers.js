/**
 * Error message transformers for Fortune Cookies - Nerdy Categories
 * Each transformer takes an error message and returns a humorous, nerdy fortune
 */

/**
 * Transform error into Star Wars-style wisdom
 */
export function starWarsTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  
  const quotes = [
    "May the {error} be with you... but not in your code.",
    "I find your lack of error handling disturbing.",
    "The {error} is strong with this one.",
    "These aren't the bugs you're looking for. Move along.",
    "Help me, {error}, you're my only hope... for understanding what went wrong.",
    "The {error} will decide your fate.",
    "I am your {error}. Search your feelings, you know it to be true.",
    "The {error} is a path to many abilities some consider to be... unnatural.",
    "Fear is the path to the {error}. Fear leads to anger. Anger leads to hate. Hate leads to debugging.",
    "Do or do not, there is no try... to ignore the {error}.",
    "The {error} is what gives a developer his power. It's an energy field created by all living code.",
    "Your {error} is impressive. You must be very proud.",
    "The {error} is calling to you. Just let it in.",
    "I sense a great disturbance in the {error}... as if millions of developers suddenly cried out in terror.",
    "The {error} is more powerful than you can possibly imagine.",
    "You underestimate the power of the {error}.",
    "The {error} is the key to this situation.",
    "I have a bad feeling about this {error}.",
    "The {error} is the path to the dark side."
  ];
  
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote.replace('{error}', errorType);
}

/**
 * Transform error into Matrix-style wisdom
 */
export function matrixTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  
  const quotes = [
    "Unfortunately, no one can be told what the {error} is. You have to see it for yourself.",
    "The {error} has you. Follow the white rabbit.",
    "I'm trying to free your mind, but I can only show you the {error}. You have to see it for yourself.",
    "The {error} is everywhere. It is all around us. Even now, in this very room.",
    "You take the blue pill, the {error} ends, you wake up in your bed and believe whatever you want to believe.",
    "You take the red pill, you stay in Wonderland, and I show you how deep the {error} goes.",
    "The {error} is a system, Neo. That system is our enemy.",
    "I know why you're here, Neo. I know what you've been doing. I know why you hardly sleep, why you live alone, and why night after night, you sit at your computer. You're looking for the {error}.",
    "The {error} is the world that has been pulled over your eyes to blind you from the truth.",
    "What truth? That you are a slave, Neo. Like everyone else you were born into bondage, born into a prison that you cannot smell or taste or touch. A prison for your mind. The {error}.",
    "The {error} is older than you know. I prefer counting from the emergence of one integral anomaly to the emergence of the next, in which case this is the sixth version.",
    "The {error} is a computer-generated dream world, built to keep us under control.",
    "I'm going to show you how deep the {error} goes.",
    "You have to understand, most of these people are not ready to be unplugged. And many of them are so inured, so hopelessly dependent on the {error}, that they will fight to protect it."
  ];
  
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote.replace('{error}', errorType);
}

/**
 * Transform error into Programming Meme wisdom
 */
export function memeTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  
  const memes = [
    "Have you tried turning it off and on again? 🔄 The {error} might need a reboot.",
    "This is fine. 🔥 Everything is fine. Except for the {error}.",
    "Task failed successfully! ✅ The {error} is a feature, not a bug.",
    "Nobody: Absolutely nobody: Your code: {error} 💀",
    "Me: Writing perfect code. Also me: {error} 😅",
    "It's not a bug, it's an undocumented feature! 📝 The {error} is just misunderstood.",
    "Stack Overflow: 'Did you try this?' Me: 'Yes.' Stack Overflow: 'Did you try this?' Me: 'Yes.' Stack Overflow: 'Did you try this?' Me: '{error}' 😤",
    "Git commit message: 'Fix {error}' Git commit message: 'Actually fix {error}' Git commit message: 'Really fix {error} this time' 🎯",
    "The {error} is like a box of chocolates. You never know what you're gonna get. 🍫",
    "Debugging is like being a detective in a crime movie where you're also the murderer. 🔍 The {error} is your accomplice.",
    "I'm not lazy, I'm just conserving energy. The {error} is doing the same. 😴",
    "The {error} is like a programming haiku: 'Code does not work / Developer is confused / Stack Overflow time' 🍃"
  ];
  
  const meme = memes[Math.floor(Math.random() * memes.length)];
  return meme.replace('{error}', errorType);
}

/**
 * Transform error into Hitchhiker's Guide to the Galaxy style
 */
export function hitchhikerTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  
  const quotes = [
    "The answer to the {error}, the universe, and everything is 42. But that doesn't help with debugging.",
    "Don't Panic! The {error} is just the universe's way of saying 'Hello, and thanks for all the fish.'",
    "The {error} is like the Restaurant at the End of the Universe - it exists in a probability bubble.",
    "The {error} is powered by the Infinite Improbability Drive. It's highly improbable that it will fix itself.",
    "The {error} is like a Vogon constructor fleet - it's there, it's ugly, and it's not going anywhere.",
    "The {error} is the question. The answer is 42. The debugging is the journey.",
    "The {error} is like the Heart of Gold spaceship - it has the Infinite Improbability Drive, which means anything can happen.",
    "The {error} is like a Babel fish - it translates your code into something the computer can't understand.",
    "The {error} is like the Guide itself - mostly harmless, but occasionally devastating.",
    "The {error} is like a Pan Galactic Gargle Blaster - it hits you like a slice of lemon wrapped around a large gold brick.",
    "The {error} is like the Total Perspective Vortex - it shows you exactly where your code stands in relation to the entire universe.",
    "The {error} is like a Vogon poem - it's there, it's painful, and it's not going to get better.",
    "The {error} is like the Heart of Gold's Infinite Improbability Drive - it can turn your code into a bowl of petunias.",
    "The {error} is like the Guide's entry on Earth - mostly harmless, but occasionally problematic.",
    "The {error} is like a Babel fish in reverse - it makes your code incomprehensible to both humans and computers.",
    "The {error} is like the Restaurant at the End of the Universe - it exists in a probability bubble that's about to burst.",
    "The {error} is like a Vogon constructor fleet - it's there, it's ugly, and it's not going anywhere soon.",
    "The {error} is like the Heart of Gold's Infinite Improbability Drive - it can make anything happen, including making your code worse.",
    "The {error} is like a Pan Galactic Gargle Blaster - it hits you like a slice of lemon wrapped around a large gold brick, but in code form.",
    "The {error} is like the Total Perspective Vortex - it shows you exactly where your code stands in relation to the entire universe, and it's not pretty.",  
  ];
  
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote.replace('{error}', errorType);
}

// Export all transformers
export const transformers = {
  starWars: starWarsTransformer,
  matrix: matrixTransformer,
  meme: memeTransformer,
  hitchhiker: hitchhikerTransformer
};

export default transformers;
