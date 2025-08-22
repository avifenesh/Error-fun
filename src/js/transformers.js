/**
 * Error message transformers for Fortune Cookies
 * Each transformer takes an error message and returns a humorous fortune
 */

/**
 * Transform error into Confucius-style wisdom
 */
export function confuciusTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  const templates = [
    "Confucius say: Developer who encounters '{error}' must first examine their assumptions.",
    "Ancient wisdom tells us: Those who rush through code will surely meet '{error}' on their path.",
    "Confucius say: Error '{error}' is not your enemy, but your teacher in disguise.",
    "Man who sees '{error}' has opportunity to grow wiser through debugging.",
    "Wise programmer knows: '{error}' today leads to understanding tomorrow."
  ];
  
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace('{error}', errorType);
}

/**
 * Transform error into Japanese haiku
 */
export function haikuTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  
  const haikus = {
    TypeError: [
      "Types confused and mixed<br>String where number should reside<br>Check your variables",
      "Undefined waits here<br>In the shadows of your code<br>Initialize first"
    ],
    ReferenceError: [
      "Variable not found<br>Searching through empty namespace<br>Define before use",
      "Name does not exist<br>Ghost variables haunt your code<br>Declare what you need"
    ],
    SyntaxError: [
      "Grammar rules broken<br>Compiler cannot understand<br>Fix your punctuation",
      "Brackets left alone<br>Seeking their missing partners<br>Balance brings harmony"
    ],
    default: [
      "Code breaks silently<br>Error messages whisper truth<br>Listen and debug",
      "Exception thrown high<br>Like autumn leaves falling down<br>Catch what you can hold"
    ]
  };
  
  const haikuList = haikus[errorType] || haikus.default;
  return haikuList[Math.floor(Math.random() * haikuList.length)];
}

/**
 * Transform error into mystical tarot reading
 */
export function tarotTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  
  const cards = {
    TypeError: "The Type Mismatch",
    ReferenceError: "The Undefined Variable", 
    SyntaxError: "The Broken Grammar",
    RangeError: "The Boundary Crosser",
    default: "The Hidden Bug"
  };
  
  const card = cards[errorType] || cards.default;
  const position = Math.random() > 0.5 ? "upright" : "reversed";
  
  const interpretations = {
    upright: [
      "This reveals a clear path forward once you address the root cause.",
      "You face a challenge that requires careful attention to detail.", 
      "The solution exists but requires looking from a new perspective."
    ],
    reversed: [
      "Hidden complexity lurks beneath the surface of this error.",
      "You may be overcomplicating a simple solution.",
      "The true source lies elsewhere in your codebase."
    ]
  };
  
  const interpretation = interpretations[position][Math.floor(Math.random() * interpretations[position].length)];
  
  return `The digital tarot reveals <strong>${card}</strong> in ${position} position. ${interpretation}`;
}

/**
 * Transform error into blame deflection
 */
export function blameTransformer() {
  const excuses = [
    "This error is clearly caused by cosmic rays flipping bits in your RAM. Totally unavoidable!",
    "Mercury is in retrograde, affecting all JavaScript engines in your timezone this week.",
    "A butterfly in Tokyo flapped its wings, creating quantum entanglement with your variables.",
    "The code was perfect until someone looked at it. Classic quantum observer effect bug!",
    "Solar flare activity is interfering with your CPU's ability to execute perfect logic.",
    "Your code exists in a quantum superposition of working and broken until observed by QA.",
    "The error is actually a feature if viewed from a non-Euclidean quantum geometric perspective.",
    "Cosmic time dilation effects near your development server are causing temporal paradoxes.",
    "The compiler is clearly having an existential crisis today due to solar interference. It's not you, it's them.",
    "Electromagnetic interference from nearby microwaves is corrupting your variable assignments via butterfly effect."
  ];
  
  return excuses[Math.floor(Math.random() * excuses.length)];
}

/**
 * Transform error into zen meditation
 */
export function zenTransformer() {
  const openings = [
    "Breathe deeply. In the space between error and solution",
    "Be present with this moment of confusion. When code breaks",
    "Like water flowing around stones, let your mind flow around this obstacle",
    "In the garden of programming, even weeds teach us about growth",
    "The wise developer sees errors not as failures, but as teachers"
  ];
  
  const middles = [
    "wisdom emerges from patient observation",
    "understanding blooms through gentle investigation", 
    "clarity comes to those who do not rush",
    "the path reveals itself to the mindful coder",
    "solutions arise naturally when we stop forcing"
  ];
  
  const endings = [
    "Return to your code with fresh eyes and renewed purpose.",
    "This too shall pass, leaving behind deeper understanding.",
    "The error contains within it the seed of its own resolution.", 
    "Trust the process; debugging is just another form of meditation.",
    "Each bug encountered strengthens your wisdom for the next journey."
  ];
  
  const opening = openings[Math.floor(Math.random() * openings.length)];
  const middle = middles[Math.floor(Math.random() * middles.length)];  
  const ending = endings[Math.floor(Math.random() * endings.length)];
  
  return `${opening}, ${middle}. ${ending}`;
}

/**
 * Transform error into motivational poster format
 */
export function motivationalTransformer(error) {
  const errorType = error.split(':')[0] || 'Error';
  
  const titles = {
    TypeError: "PERSISTENCE",
    ReferenceError: "PREPARATION", 
    SyntaxError: "ATTENTION TO DETAIL",
    RangeError: "BOUNDARIES",
    default: "RESILIENCE"
  };
  
  const quotes = [
    "The difference between a novice and expert isn't the number of errors—it's the speed of recovery.",
    "Every error you solve makes you stronger. You're not just debugging; you're leveling up.",
    "Behind every great developer is a trail of conquered bugs and lessons learned.",
    "This error isn't a roadblock—it's your chance to become a better programmer.",
    "Success isn't the absence of errors; it's the presence of persistence and curiosity.",
    "The best developers aren't those who write perfect code, but those who fix imperfect code elegantly.",
    "Your future self will thank you for taking the time to understand this error completely.",
    "Every 'impossible' bug becomes 'obvious' once you find the solution. Keep looking!",
    "Debugging is like being a detective in a crime drama where you're also the criminal. Embrace it!",
    "The most valuable skills come from solving problems you've never seen before."
  ];
  
  const title = titles[errorType] || titles.default;
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return `<strong>${title}</strong><br><br>${quote}`;
}

/**
 * Transform error into tech support response
 */
export function techSupportTransformer() {
  const responses = [
    "Have you tried turning your variables off and on again? Classic troubleshooting step #1.",
    "I see the problem here. Your code is working exactly as you wrote it, not as you intended it.",
    "This is a PEBKAC error: Problem Exists Between Keyboard And Chair. Very common issue.",
    "Looking at our knowledge base... ah yes, this is a Code-ID-10-T error. Please try again.",
    "Did you check if your computer is plugged in? No? Well, your logic might not be either.",
    "I'm going to need you to restart your thought process and try a different approach.",
    "This error is operating within normal parameters for untested code. Working as designed.",
    "Have you updated your assumptions recently? Try checking for outdated expectations that can cause compatibility issues.",
    "I see you're experiencing a logic leak. Try wrapping your code in some error handling.",
    "This appears to be a user-generated error. The system is working correctly; the input isn't."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

// Export all transformers
export const transformers = {
  confucius: confuciusTransformer,
  haiku: haikuTransformer, 
  tarot: tarotTransformer,
  blame: blameTransformer,
  zen: zenTransformer,
  motivational: motivationalTransformer,
  techSupport: techSupportTransformer
};

export default transformers;
