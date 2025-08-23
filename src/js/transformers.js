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
    "Wise programmer knows: '{error}' today leads to understanding tomorrow.",
    "Confucius say: Man who copy-paste from Stack Overflow without understanding will surely meet '{error}' again.",
    "Ancient wisdom: Developer who does not test their code will surely test their patience with '{error}'.",
    "Confucius say: Variable declared but never used is like wisdom spoken but never heard.",
    "Wise coder knows: '{error}' is just compiler's way of saying 'I believe in you, but not your code.'",
    "Confucius say: Man who writes code at 3 AM will debug at 3 PM. Such is the circle of programming.",
    "Ancient wisdom: '{error}' is not bug, it is undocumented feature waiting to be discovered.",
    "Confucius say: Developer who commits code on Friday will surely debug on Monday.",
    "Wise programmer knows: '{error}' is like quantum particle - exists in superposition of fixed and broken until observed.",
    "Confucius say: Man who does not handle exceptions will surely handle consequences.",
    "Ancient wisdom: '{error}' is just computer's way of saying 'I know what you meant, but I'm going to do what you said.'"
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
      "Undefined waits here<br>In the shadows of your code<br>Initialize first",
      "Null is not object<br>Type checking saves the day<br>Guard your functions",
      "Cannot read property<br>Of undefined variable<br>Check before access",
      "Type mismatch found<br>String and number collide<br>Cast with purpose"
    ],
    ReferenceError: [
      "Variable not found<br>Searching through empty namespace<br>Define before use",
      "Name does not exist<br>Ghost variables haunt your code<br>Declare what you need",
      "Function undefined<br>Scope boundaries crossed in vain<br>Import what you need",
      "Cannot access 'x'<br>Before it is declared<br>Hoisting won't help",
      "Reference lost in<br>Dark corners of your codebase<br>Trace the origin"
    ],
    SyntaxError: [
      "Grammar rules broken<br>Compiler cannot understand<br>Fix your punctuation",
      "Brackets left alone<br>Seeking their missing partners<br>Balance brings harmony",
      "Unexpected token<br>Parser stops in confusion<br>Check your syntax",
      "Missing semicolon<br>JavaScript weeps softly<br>Add the missing piece",
      "End of input reached<br>Before expression complete<br>Close your brackets"
    ],
    RangeError: [
      "Array bounds crossed<br>Index exceeds the limit<br>Check your length first",
      "Stack overflow deep<br>Recursion without base case<br>Find the exit path",
      "Maximum exceeded<br>Call stack grows too tall<br>Optimize your loops",
      "Index out of bounds<br>Array access goes too far<br>Validate input",
      "Range violation<br>Number exceeds safe limits<br>Use BigInt instead"
    ],
    default: [
      "Code breaks silently<br>Error messages whisper truth<br>Listen and debug",
      "Exception thrown high<br>Like autumn leaves falling down<br>Catch what you can hold",
      "Bug appears at night<br>When you think code is perfect<br>Test in morning light",
      "Error in production<br>Works fine on local machine<br>Environment matters",
      "Race condition found<br>Timing issues haunt your code<br>Use proper locks"
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
    NetworkError: "The Connection Lost",
    TimeoutError: "The Eternal Wait",
    MemoryError: "The Overflow",
    SecurityError: "The Forbidden Access",
    default: "The Hidden Bug"
  };
  
  const card = cards[errorType] || cards.default;
  const position = Math.random() > 0.5 ? "upright" : "reversed";
  
  const interpretations = {
    upright: [
      "This reveals a clear path forward once you address the root cause.",
      "You face a challenge that requires careful attention to detail.", 
      "The solution exists but requires looking from a new perspective.",
      "The error is a sign that you're pushing the boundaries of what's possible.",
      "This challenge will strengthen your debugging skills and make you wiser.",
      "The solution lies in the fundamentals - return to the basics of your craft.",
      "Your persistence in solving this will unlock new understanding.",
      "This error is a gateway to learning something new about your tools."
    ],
    reversed: [
      "Hidden complexity lurks beneath the surface of this error.",
      "You may be overcomplicating a simple solution.",
      "The true source lies elsewhere in your codebase.",
      "Beware of assumptions that cloud your judgment.",
      "The error may be a symptom of a larger architectural issue.",
      "Look beyond the immediate problem to find the systemic cause.",
      "Your current approach may be leading you in circles.",
      "The solution requires stepping back and seeing the bigger picture."
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
    "Electromagnetic interference from nearby microwaves is corrupting your variable assignments via butterfly effect.",
    "The error is caused by a rare alignment of Jupiter, Mars, and your code editor's autocomplete.",
    "Your code is experiencing gravitational time dilation due to the massive weight of technical debt.",
    "The bug is a result of the Heisenberg uncertainty principle - you can't know both the position and velocity of your variables.",
    "This is clearly a case of quantum tunneling where your error message escaped from a parallel universe.",
    "The error is caused by the butterfly effect from when you sneezed while typing 'console.log'.",
    "Your code is experiencing relativistic effects due to the high velocity of your typing speed.",
    "The bug is a manifestation of the multiverse theory - in another universe, this code works perfectly.",
    "This error is caused by the quantum foam at the Planck scale affecting your binary operations.",
    "The compiler is experiencing a crisis of faith after reading Nietzsche. It's questioning the meaning of semicolons.",
    "Your code is caught in a temporal causality loop. Try turning it off and on again, but in reverse chronological order."
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
    "The wise developer sees errors not as failures, but as teachers",
    "In the silence of a broken build, listen to what the code is trying to tell you",
    "The error is not separate from you. You are the error, and the error is you",
    "When the compiler speaks, do not interrupt. Listen with your whole being",
    "In the void of undefined, find the space for new understanding",
    "The bug that cannot be fixed is not a bug at all, but a feature of the universe"
  ];
  
  const middles = [
    "wisdom emerges from patient observation",
    "understanding blooms through gentle investigation", 
    "clarity comes to those who do not rush",
    "the path reveals itself to the mindful coder",
    "solutions arise naturally when we stop forcing",
    "the truth of the error becomes clear in stillness",
    "debugging is just another form of meditation",
    "the answer lies not in the code, but in the space between thoughts",
    "each bug encountered is a step toward enlightenment",
    "the compiler's error message is a koan to be contemplated"
  ];
  
  const endings = [
    "Return to your code with fresh eyes and renewed purpose.",
    "This too shall pass, leaving behind deeper understanding.",
    "The error contains within it the seed of its own resolution.", 
    "Trust the process; debugging is just another form of meditation.",
    "Each bug encountered strengthens your wisdom for the next journey.",
    "The solution was always there, waiting for you to see it clearly.",
    "In fixing this error, you fix a part of yourself.",
    "The bug is not the enemy; resistance to the bug is the enemy.",
    "When you stop fighting the error, the error stops fighting you.",
    "The path to working code is the path to inner peace."
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
    NetworkError: "CONNECTION",
    TimeoutError: "PATIENCE",
    MemoryError: "OPTIMIZATION",
    SecurityError: "VIGILANCE",
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
    "The most valuable skills come from solving problems you've never seen before.",
    "This error is not a failure; it's a feature request from the universe for better code.",
    "The compiler is not your enemy; it's your strict but fair teacher.",
    "Every bug you squash is one less bug that can haunt your users.",
    "The error message is the universe's way of saying 'I believe you can do better.'",
    "Debugging is the art of turning 'it should work' into 'it does work.'",
    "Your code is like a puzzle, and this error is just a piece that needs to be placed correctly.",
    "The best debugging sessions happen when you're not in a hurry.",
    "This error is an opportunity to learn something new about your craft.",
    "The difference between a bug and a feature is documentation and timing.",
    "Every error is a stepping stone on the path to mastery."
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
    "This appears to be a user-generated error. The system is working correctly; the input isn't.",
    "Have you tried clearing your brain cache and restarting your thought process?",
    "This looks like a classic case of 'it works on my machine' syndrome. Very contagious.",
    "I'm going to need you to unplug your keyboard, wait 30 seconds, and plug it back in. Just kidding, that won't help.",
    "The error message is clear: you're trying to use logic where none exists. Common rookie mistake.",
    "This appears to be a case of premature optimization. The code was working fine until you tried to make it better.",
    "Have you tried reading the documentation? No? Well, there's your problem right there.",
    "I see you've discovered a new way to break things. Congratulations on your creativity!",
    "This error is like a mystery novel - the clues are all there, you just need to read between the lines.",
    "The problem is that your code is too smart for its own good. Try dumbing it down a bit.",
    "This is what we call a 'learning opportunity' in the industry. You're welcome for the education."
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
