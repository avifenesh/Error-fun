// Core transformation functions for Error Message Fortune Cookies
// This file contains the logic for transforming error messages into different fortune styles

/**
 * Transform an error message into a Confucius-style wisdom
 * @param {string} error - The error message
 * @returns {string} Confucius wisdom
 */
function confuciusTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Templates for Confucius wisdom
  const templates = [
    "Confucius say: Man who {action} {subject} find himself {consequence}.",
    "Ancient wisdom tell us: Those who {action} will surely {consequence}.",
    "Path to enlightenment never {action}. Wise developer {alternative}.",
    "In garden of code, {subject} cannot grow without {requirement}.",
    "Confucius say: {errorType} today leads to wisdom tomorrow, but only if you {solution}.",
    "Developer who chases two bugs catches neither. Focus on {subject} first.",
    "Code written in anger should be refactored in calm.",
    "Before fixing bug, first understand why it exists.",
    "Wise programmer knows difference between running code and correct code.",
    "Bug that appears impossible usually has simple explanation hidden in {subject}."
  ];
  
  // Actions based on error types
  const actions = {
    TypeError: ["measure nothing", "confuse types", "expect stone to be water"],
    ReferenceError: ["seek what does not exist", "reference shadows", "call upon ghost variables"],
    SyntaxError: ["speak incorrect language", "misplace sacred symbols", "forget ancient grammar"],
    RangeError: ["exceed boundaries", "ask too much of too little", "demand infinity from finite resource"],
    Default: ["rush code", "skip testing", "ignore compiler wisdom"]
  };
  
  // Consequences
  const consequences = [
    "coming up short",
    "walking path of many bugs",
    "drinking from empty cup",
    "building house on shifting sand",
    "chasing own tail for many hours"
  ];
  
  // Solutions/alternatives
  const solutions = [
    "check twice, code once",
    "consult ancient documentation",
    "meditate upon types before using",
    "seek wisdom in stack overflow",
    "embrace power of console.log"
  ];
  
  // Requirements
  const requirements = [
    "proper care",
    "careful attention",
    "correct types",
    "initialization",
    "defensive checking"
  ];
  
  // Select random elements
  const template = randomItem(templates);
  const action = randomItem(actions[errorType] || actions.Default);
  const consequence = randomItem(consequences);
  const solution = randomItem(solutions);
  const requirement = randomItem(requirements);
  
  // Extract subject from error details or use defaults
  let subject = "code";
  if (errorDetails.includes("undefined")) subject = "undefined";
  else if (errorDetails.includes("null")) subject = "null value";
  else if (errorDetails.includes("property")) subject = "property";
  else if (errorDetails.includes("function")) subject = "function";
  
  // Fill in the template
  return template
    .replace("{action}", action)
    .replace("{subject}", subject)
    .replace("{consequence}", consequence)
    .replace("{alternative}", solution)
    .replace("{solution}", solution)
    .replace("{errorType}", errorType)
    .replace("{requirement}", requirement);
}

/**
 * Transform an error message into a haiku
 * @param {string} error - The error message
 * @returns {string} Error haiku
 */
function haikuTransformer(error) {
  // Extract error type
  const errorType = error.split(':')[0] || 'Error';
  
  // First lines (5 syllables)
  const firstLines = [
    "Silent exception",
    "Code refuses work",
    "Functions returning",
    "Null pointer beckons",
    "Variables lost",
    "Error emerges",
    "Broken promises",
    "Logic collapses",
    "Memory leaking",
    "Syntax rejected"
  ];
  
  // Second lines (7 syllables)
  const secondLines = {
    TypeError: [
      "Types confused and mismatched now",
      "String where number should have been",
      "Expecting what was never there"
    ],
    ReferenceError: [
      "Shadows in empty namespace",
      "Calling names that don't exist",
      "Reaching for a ghost variable"
    ],
    SyntaxError: [
      "Grammar broken, parser weeps",
      "Brackets missing their partners",
      "Semicolons forgotten"
    ],
    Default: [
      "Errors hiding in plain sight",
      "Compiler speaks in riddles now",
      "Logic twisted into knots",
      "Algorithms falter, pause",
      "Patterns broken by mistake"
    ]
  };
  
  // Third lines (5 syllables)
  const thirdLines = [
    "Debug through the night",
    "Stack trace tells no lies",
    "Restart and try again",
    "Silence fills the screen",
    "Code begins to break",
    "Tests reveal the truth",
    "Fix one, break two more",
    "Wisdom comes from pain",
    "Coffee grows too cold",
    "Time to take a walk"
  ];
  
  // Select random lines
  const firstLine = randomItem(firstLines);
  const secondLine = randomItem(secondLines[errorType] || secondLines.Default);
  const thirdLine = randomItem(thirdLines);
  
  // Combine into haiku
  return `${firstLine}<br>${secondLine}<br>${thirdLine}`;
}

/**
 * Transform error into blame deflection
 * @param {string} error - The error message
 * @returns {string} Blame deflection
 */
function blameTransformer(error) {
  const excuses = [
    "This error is clearly due to a cosmic ray flipping a bit in memory. Not your fault at all!",
    "Mercury is in retrograde, affecting all pointer arithmetic in your timezone.",
    "Your code is perfect. It's the laws of physics that are wrong today.",
    "A temporal anomaly in the server room has caused your variables to time travel.",
    "Quantum fluctuations in the CPU have created an alternate reality where this code doesn't work.",
    "Your keyboard has been secretly autocorrecting your perfect code into errors.",
    "The alignment of Wi-Fi waves with the office building is creating interference patterns in your logic.",
    "The compiler is clearly in a bad mood today. Try again when it's feeling better.",
    "Your code worked fine until someone made eye contact with the server.",
    "The error is actually a feature if you look at it from a non-Euclidean perspective.",
    "Your code is correct in at least 14 parallel universes.",
    "The error is due to sunspot activity interfering with your garbage collector.",
    "Your algorithm is too advanced for current hardware to understand properly.",
    "The bug is actually a misunderstood feature trying to express itself.",
    "This is clearly the result of a butterfly flapping its wings in Brazil last week."
  ];
  
  return randomItem(excuses);
}

/**
 * Transform error into tarot card reading
 * @param {string} error - The error message
 * @returns {string} Tarot reading
 */
function tarotTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  
  // Define tarot cards based on error types
  const cards = {
    TypeError: ["The Type Mismatch", "The Undefined Variable", "The Null Object"],
    ReferenceError: ["The Missing Reference", "The Uninitialized Variable", "The Empty Scope"],
    SyntaxError: ["The Broken Syntax", "The Mismatched Bracket", "The Missing Semicolon"],
    RangeError: ["The Boundary Crosser", "The Infinite Loop", "The Stack Overflow"],
    Default: ["The Bug", "The Compiler Warning", "The Runtime Exception"]
  };
  
  // Select appropriate card or fallback to default
  const card = randomItem(cards[errorType] || cards.Default);
  
  // Determine if card is upright or reversed
  const position = Math.random() > 0.5 ? "upright" : "reverse";
  
  // Templates for readings
  const templates = [
    "The card {card} appears in {position} position. {interpretation} {advice}",
    "Your code reveals {card}, {position}. {interpretation} {advice}",
    "The digital tarot shows {card} in {position} alignment. {interpretation} {advice}"
  ];
  
  // Interpretations based on position
  const interpretations = {
    upright: [
      "This suggests a clear path forward once you address the fundamental issue.",
      "You are facing a challenge that requires careful attention to detail.",
      "A solution exists but may require looking at your code from a new perspective."
    ],
    reverse: [
      "This indicates hidden complexity that isn't immediately obvious.",
      "You may be overlooking something simple in your pursuit of a complex solution.",
      "The true source of your problem lies elsewhere in your code."
    ]
  };
  
  // Advice to give
  const advice = [
    "Patience with syntax will reveal the proper path.",
    "Consider stepping away and returning with fresh eyes.",
    "The documentation holds the key to your salvation.",
    "Seek wisdom from those who have faced this error before.",
    "A careful review of your types will bring harmony."
  ];
  
  // Select random template and advice
  const template = randomItem(templates);
  const interpretation = randomItem(interpretations[position]);
  const selectedAdvice = randomItem(advice);
  
  // Fill in the template
  return template
    .replace("{card}", card)
    .replace("{position}", position)
    .replace("{interpretation}", interpretation)
    .replace("{advice}", selectedAdvice);
}

/**
 * Transform error into motivational poster text
 * @param {string} error - The error message
 * @returns {string} Motivational text
 */
function motivationalTransformer(error) {
  // Extract error type
  const errorType = error.split(':')[0] || 'Error';
  
  // Sample titles
  const titles = {
    TypeError: ["TYPE MISMATCH", "EXPECTATION", "CONFUSION"],
    ReferenceError: ["UNDEFINED", "MISSING", "ABSENCE"],
    SyntaxError: ["SYNTAX", "STRUCTURE", "GRAMMAR"],
    Default: ["PERSISTENCE", "DEBUGGING", "RESILIENCE"]
  };
  
  // Sample quotes
  const quotes = [
    "It's not about avoiding errors; it's about how elegantly you handle them.",
    "The error message is the first step on the road to a solution.",
    "Behind every great program is a developer who refused to give up on a stubborn bug.",
    "Errors are just the universe's way of telling you there's a more creative solution.",
    "The difference between a junior and senior developer is how they react to the same error message.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "Your code doesn't have to be perfect. It just has to be better than it was yesterday.",
    "The most valuable line in your program is the one that shows you where you went wrong.",
    "Success is not the absence of errors, but the presence of solutions.",
    "The path to clean code is paved with a thousand error messages."
  ];
  
  // Select appropriate title or fallback to default
  const title = randomItem(titles[errorType] || titles.Default);
  
  // Select random quote
  const quote = randomItem(quotes);
  
  // Format as motivational poster
  return `<strong>${title}</strong><br><br>${quote}`;
}

/**
 * Helper function to select a random item from an array
 * @param {Array} array - The array to select from
 * @returns {*} A random item from the array
 */
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Transform error into a tech support style response
 * @param {string} error - The error message
 * @returns {string} Tech support response
 */
function techSupportTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Templates for tech support responses
  const templates = [
    "Have you tried turning it off and on again? {errorType} errors often resolve themselves after a system restart.",
    "According to our database, this {errorType} issue affects 1 in {random} developers. The recommended solution is to {solution}.",
    "Our automated diagnostic system has detected a {errorType}. This is typically caused by {cause}. We suggest you {solution}.",
    "Error code: {errorCode}. This {errorType} requires immediate attention. Please {solution} to prevent data corruption.",
    "This appears to be a known issue with {subject}. Our engineers are working on a patch. In the meantime, please {workaround}.",
    "Your system has encountered a {errorType}. This is usually related to {cause}. Have you tried {solution}?",
    "Technical analysis: {errorType} detected in {subject}. Recommended action: {solution}. Estimated success rate: {successRate}%.",
    "We've received your error report about {errorType}. This is a {severity} issue that can be resolved by {solution}.",
    "Our AI has analyzed your {errorType} and determined it's {severity}. The quickest fix is to {solution}.",
    "This {errorType} has been added to our tracking system. Reference number: {errorCode}. Please {solution} while we investigate."
  ];
  
  // Causes based on error types
  const causes = {
    TypeError: ["inconsistent data types", "unexpected null values", "type coercion issues"],
    ReferenceError: ["undefined variables", "scope problems", "missing imports"],
    SyntaxError: ["incorrect syntax", "missing delimiters", "invalid expressions"],
    RangeError: ["values outside acceptable ranges", "stack overflow", "excessive recursion"],
    Default: ["configuration issues", "environment variables", "dependency conflicts"]
  };
  
  // Solutions
  const solutions = [
    "clear your browser cache and try again",
    "update all dependencies to their latest versions",
    "check your network connection and retry",
    "reinstall the application",
    "verify your configuration settings",
    "run the diagnostic tool in our support portal",
    "implement the workaround described in our knowledge base article #KB{errorCode}",
    "contact our support team with the error code"
  ];
  
  // Workarounds
  const workarounds = [
    "use the legacy API endpoint temporarily",
    "disable the problematic feature until the next update",
    "switch to compatibility mode",
    "use our command-line tool instead of the GUI",
    "implement the manual override procedure"
  ];
  
  // Severity levels
  const severities = ["critical", "major", "moderate", "minor", "cosmetic"];
  
  // Success rates
  const successRates = [99, 95, 90, 85, 80, 75, 70];
  
  // Random numbers
  const randoms = [10, 20, 50, 100, 200, 500, 1000];
  
  // Error codes
  const errorCodes = ["E" + Math.floor(Math.random() * 900 + 100), 
                     "X" + Math.floor(Math.random() * 9000 + 1000),
                     "ERR-" + Math.floor(Math.random() * 90 + 10)];
  
  // Select random elements
  const template = randomItem(templates);
  const cause = randomItem(causes[errorType] || causes.Default);
  const solution = randomItem(solutions);
  const workaround = randomItem(workarounds);
  const severity = randomItem(severities);
  const successRate = randomItem(successRates);
  const random = randomItem(randoms);
  const errorCode = randomItem(errorCodes);
  
  // Extract subject from error details or use defaults
  let subject = "your code";
  if (errorDetails.includes("undefined")) subject = "undefined variables";
  else if (errorDetails.includes("null")) subject = "null values";
  else if (errorDetails.includes("property")) subject = "object properties";
  else if (errorDetails.includes("function")) subject = "function calls";
  
  // Fill in the template
  return template
    .replace("{errorType}", errorType)
    .replace("{subject}", subject)
    .replace("{cause}", cause)
    .replace("{solution}", solution)
    .replace("{workaround}", workaround)
    .replace("{severity}", severity)
    .replace("{successRate}", successRate)
    .replace("{random}", random)
    .replace("{errorCode}", errorCode);
}

/**
 * Transform error into a poetic verse
 * @param {string} error - The error message
 * @returns {string} Poetic verse
 */
function poeticTransformer(error) {
  // Extract error type
  const errorType = error.split(':')[0] || 'Error';
  
  // First lines
  const firstLines = [
    "In the silent depths of code,",
    "Through the labyrinth of logic,",
    "When the compiler speaks its truth,",
    "Amidst the forest of algorithms,",
    "Between the brackets and the braces,",
    "As functions call into the void,",
    "Where variables lose their meaning,",
    "In the dance of ones and zeros,",
    "Through the mist of abstraction,",
    "When syntax fails its promise,"
  ];
  
  // Middle lines based on error types
  const middleLines = {
    TypeError: [
      "A type, misunderstood, rebels.",
      "Confusion blooms between the types.",
      "The shape of data twists and turns."
    ],
    ReferenceError: [
      "A name is called that never was.",
      "Echoes of undefined resound.",
      "A reference points to emptiness."
    ],
    SyntaxError: [
      "Grammar breaks its ancient rules.",
      "The language bends until it breaks.",
      "Symbols stand in wrong formation."
    ],
    RangeError: [
      "Boundaries crossed without consent.",
      "The limits of the possible emerge.",
      "Infinity confronts its edges."
    ],
    Default: [
      "An error rises from the deep.",
      "The unexpected manifests.",
      "Logic falters in its path.",
      "The code reveals its hidden flaw."
    ]
  };
  
  // Last lines
  const lastLines = [
    "Yet in failure, wisdom grows.",
    "Debug, and rise again renewed.",
    "In errors, truth is often found.",
    "The solution waits for patient eyes.",
    "Tomorrow's code will stand more strong.",
    "Each error teaches what we need.",
    "The path to mastery winds through bugs.",
    "From broken code comes deeper sight.",
    "The greatest code was born from flaws.",
    "In the ashes of errors, perfection blooms."
  ];
  
  // Select random lines
  const firstLine = randomItem(firstLines);
  const middleLine = randomItem(middleLines[errorType] || middleLines.Default);
  const lastLine = randomItem(lastLines);
  
  // Combine into verse
  return `${firstLine}<br>${middleLine}<br>${lastLine}`;
}

/**
 * Transform error into a zen meditation style response
 * @param {string} error - The error message
 * @returns {string} Zen meditation response
 */
function zenTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Zen meditation phrases
  const openings = [
    "In the silence between keystrokes",
    "Breathe in the error, breathe out the solution",
    "The code that breaks teaches us the most",
    "When the program crashes, listen closely",
    "The bug is not your enemy, but your teacher",
    "In the garden of programming",
    "The wise developer sees errors as guides",
    "Sit with your error in mindful awareness",
    "The path to clean code is paved with errors",
    "Like water flowing around rocks"
  ];
  
  // Middle phrases based on error types
  const middles = {
    TypeError: [
      "types flow into one another like rivers to the sea",
      "confusion between what is and what appears to be",
      "the nature of objects reveals itself through errors",
      "expectations and reality stand apart"
    ],
    ReferenceError: [
      "we seek what is not there, yet learn what is",
      "absence teaches us about presence",
      "the empty space holds as much meaning as the filled",
      "we learn the value of preparation and initialization"
    ],
    SyntaxError: [
      "form and structure create meaning",
      "the grammar of code speaks of deeper patterns",
      "order emerges from careful attention to detail",
      "each symbol must find its proper place"
    ],
    Default: [
      "we find the path by noticing where we stumble",
      "errors illuminate the way forward",
      "patience reveals what haste conceals",
      "the obstacle becomes the way"
    ]
  };
  
  // Closing wisdom
  const closings = [
    "Return to your code with fresh eyes.",
    "The solution will appear when the mind is still.",
    "Each error brings you closer to understanding.",
    "This moment of confusion will pass.",
    "Embrace the error as part of the journey.",
    "The compiler speaks wisdom through its errors.",
    "In debugging, we discover our assumptions.",
    "The error is a gift that points to growth.",
    "Let go of frustration; hold onto curiosity.",
    "The path of learning is never straight."
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into zen meditation
  return `${opening}, ${middle}. ${closing}`;
}

// Import additional creative transformers
import {
  shakespeareanTransformer,
  filmNoirTransformer,
  sciFiTransformer,
  pirateTransformer,
  westernTransformer,
  superheroTransformer,
  fantasyTransformer,
  bMovieTransformer,
  influencerTransformer,
  legalTransformer,
  recipeTransformer,
  sportsTransformer
} from './creative-transformers.js';

// Export transformers
export {
  confuciusTransformer,
  haikuTransformer,
  blameTransformer,
  tarotTransformer,
  motivationalTransformer,
  techSupportTransformer,
  poeticTransformer,
  zenTransformer,
  shakespeareanTransformer,
  filmNoirTransformer,
  sciFiTransformer,
  pirateTransformer,
  westernTransformer,
  superheroTransformer,
  fantasyTransformer,
  bMovieTransformer,
  influencerTransformer,
  legalTransformer,
  recipeTransformer,
  sportsTransformer
};