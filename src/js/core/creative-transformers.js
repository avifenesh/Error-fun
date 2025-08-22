// Additional transformers for Error Message Fortune Cookies
// These transformers convert error messages into various creative styles

/**
 * Transform error into a Shakespearean style response
 * @param {string} error - The error message
 * @returns {string} Shakespearean response
 */
function shakespeareanTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Shakespearean phrases and templates
  const openings = [
    "Alas, what tragedy befalls thy code!",
    "O woeful error, what sorrow thou bringest!",
    "What manner of beast is this error I see before me?",
    "Hark! A most grievous fault appears!",
    "To err or not to err, that is the question.",
    "Friends, Romans, coders, lend me your ears; I come to debug thy code, not to praise it."
  ];
  
  const middles = {
    TypeError: [
      "The types doth protest too much, methinks.",
      "What's in a type? That which we call undefined by any other name would still crash as deep.",
      "This TypeError, like a poison'd chalice, brings ruin to thy program's lips."
    ],
    ReferenceError: [
      "The variable, it seems, has shuffled off this mortal coil.",
      "This reference, like a ghost, doth fade before our grasp.",
      "Out, out, brief reference! Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more."
    ],
    SyntaxError: [
      "Thy syntax hath more gaps than a peasant's teeth.",
      "The brackets fall in disarray, like soldiers fleeing from the battlefield.",
      "Something is rotten in the state of thy syntax."
    ],
    Default: [
      "The fault, dear programmer, is not in our stars, but in our code.",
      "All the world's a stage, and all the errors merely players.",
      "Uneasy lies the head that wears the crown of debugging."
    ]
  };
  
  const closings = [
    "Shall we proceed with the debugging most foul?",
    "What light through yonder console breaks? It is the solution, and wisdom is the sun.",
    "Parting is such sweet sorrow, that I shall debug 'til it be morrow.",
    "Now is the winter of our discontent made glorious summer by this fixed bug.",
    "All's well that ends well, once thy error is vanquished."
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Shakespearean verse
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Film Noir detective style
 * @param {string} error - The error message
 * @returns {string} Film Noir response
 */
function filmNoirTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Film Noir phrases and templates
  const openings = [
    "It was a dark and stormy night when the error crept in.",
    "The bug slipped into my code like a dame with a secret.",
    "I knew this function was trouble the moment I laid eyes on it.",
    "The console was as black as my coffee and twice as bitter.",
    "The error hit me like a freight train on a cold Monday morning."
  ];
  
  const middles = {
    TypeError: [
      "Types don't lie, kid. But programmers? They lie all the time.",
      "The type was all wrong, like a penguin at a desert party.",
      "I've seen some type mismatches in my day, but this one took the cake."
    ],
    ReferenceError: [
      "The reference was missing, like a witness who skipped town before the trial.",
      "Null and undefined. The perfect alibi. Too perfect, if you ask me.",
      "The variable vanished without a trace. No forwarding address, no goodbye note."
    ],
    SyntaxError: [
      "The syntax was broken, like my spirit after a three-day debugging bender.",
      "Brackets and parentheses scattered like evidence at a crime scene.",
      "The code was a mess, like my office after a visit from the syntax police."
    ],
    Default: [
      "This error's got more layers than a year-old onion.",
      "Bugs don't just happen. Someone's always responsible.",
      "I've been chasing this error for so long, I forgot what daylight looks like."
    ]
  };
  
  const closings = [
    "I'll fix it, but it won't be pretty. Nothing in this town ever is.",
    "Some errors you fix. Others... they fix you.",
    "In the end, it's always the semicolons that get you.",
    "I'll solve this case if it's the last thing I do.",
    "Another day, another bug. That's just how it goes in this business."
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Film Noir style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Sci-Fi technobabble style
 * @param {string} error - The error message
 * @returns {string} Sci-Fi response
 */
function sciFiTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Sci-Fi phrases and templates
  const openings = [
    "Alert! Quantum fluctuation detected in the code matrix!",
    "Captain's log, stardate 43.7: We've encountered an anomaly in the program continuum.",
    "The code's dilithium crystals are experiencing a catastrophic cascade failure.",
    "Warning: Temporal distortion detected in the algorithmic subspace.",
    "The neural network's synaptic processors have encountered a logic paradox."
  ];
  
  const middles = {
    TypeError: [
      "The type converters have failed to properly modulate the tachyon emissions.",
      "A dimensional rift has caused quantum entanglement between incompatible data types.",
      "The variable's molecular cohesion is breaking down at the subatomic level."
    ],
    ReferenceError: [
      "The referenced entity appears to have been pulled into a parallel memory dimension.",
      "Scanners indicate the variable has been consumed by a void in the code-space continuum.",
      "The quantum state of the reference has collapsed before observation."
    ],
    SyntaxError: [
      "The syntax matrix has been corrupted by an ion storm in sector 7G.",
      "Grammatical particle accelerator malfunction detected in the code compiler.",
      "The algorithmic universal translator has failed to interpret the command structure."
    ],
    Default: [
      "Our sensors detect a disturbance in the code-force.",
      "The main deflector dish cannot compensate for this level of programming entropy.",
      "The holographic code projection is experiencing a critical failure."
    ]
  };
  
  const closings = [
    "Recommend recalibrating the primary code arrays and reinitializing the debugging sequence.",
    "We must reverse the polarity of the neutron flow to restore system functionality.",
    "Only by realigning the quantum harmonics can we hope to resolve this paradox.",
    "Initiating emergency protocol: Ctrl-Alt-Delete Prime Directive.",
    "Perhaps we can bypass the main power coupling and route around the damaged code sectors."
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Sci-Fi style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Pirate style response
 * @param {string} error - The error message
 * @returns {string} Pirate response
 */
function pirateTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Pirate phrases and templates
  const openings = [
    "Shiver me timbers!",
    "Blimey! What have ye done to me code?",
    "Arrr! There be a problem with yer program, matey!",
    "Avast ye! There be bugs in these waters!",
    "Yo ho ho! A troublesome error has been spotted off the starboard bow!"
  ];
  
  const middles = {
    TypeError: [
      "Ye tried to make a string walk the plank with numbers, ye scurvy dog!",
      "Yer types be mismatched like a one-legged pirate with two peg legs!",
      "The type ye seek be buried with the rest of the treasure, it be!"
    ],
    ReferenceError: [
      "The variable ye be lookin' for has sailed to Davy Jones' locker!",
      "Ye can't reference what ain't there, ye addlebrained swabbie!",
      "That reference be as missing as me gold-plated hook!"
    ],
    SyntaxError: [
      "Yer syntax be more mangled than a kraken's tentacles!",
      "Ye've got more misplaced brackets than I've got bottles o' rum!",
      "Yer code structure be fallin' apart like a ship in a maelstrom!"
    ],
    Default: [
      "This error be giving me more grief than a plank-walking ceremony!",
      "I've seen cleaner code written by a drunken sea cook!",
      "Yer program be leakin' worse than me old ship in a storm!"
    ]
  };
  
  const closings = [
    "Fix it quick, or it's the plank for ye!",
    "Best be debuggin' before the tide comes in!",
    "Splice the mainbrace and fix the code, or face the captain's wrath!",
    "May the winds of good fortune help ye find the bug, or ye be marooned!",
    "Batten down the hatches and prepare to debug, me hearty!"
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Pirate style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Cowboy Western style
 * @param {string} error - The error message
 * @returns {string} Western response
 */
function westernTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Western phrases and templates
  const openings = [
    "Whoa there, partner!",
    "Well, I'll be a rattlesnake's uncle!",
    "Hold your horses, cowboy!",
    "This code's got more problems than a one-legged horse in a kickin' contest.",
    "Looks like we got ourselves a situation here."
  ];
  
  const middles = {
    TypeError: [
      "You're tryin' to fit a square peg in a round hole with them types.",
      "Them types are more mixed up than a tumbleweed in a tornado.",
      "You can't make a silk purse outta a sow's ear, and you sure can't make that type work here."
    ],
    ReferenceError: [
      "That reference is as gone as last year's tumbleweed.",
      "You're chasin' after a reference that ain't never been roped.",
      "That variable's done rode off into the sunset."
    ],
    SyntaxError: [
      "Your syntax is crookeder than a wagon trail over the Rockies.",
      "Them brackets are scattered like cattle after a lightning storm.",
      "This here syntax wouldn't pass muster at the O.K. Corral."
    ],
    Default: [
      "This error's meaner than a rattlesnake with a toothache.",
      "You've got yourself in a real pickle, ain't ya?",
      "This code's about as useful as a screen door on a submarine."
    ]
  };
  
  const closings = [
    "Best saddle up and fix it 'fore sundown.",
    "Time to round up them bugs and drive 'em outta your code.",
    "Ain't no use cryin' over spilt milk. Just clean up your code and move on.",
    "You best get to fixin' this faster than a jackrabbit on a hot griddle.",
    "Don't worry, even the best cowboys fall off their horse sometimes."
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Western style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Superhero Comic style
 * @param {string} error - The error message
 * @returns {string} Superhero response
 */
function superheroTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Superhero phrases and templates
  const openings = [
    "Great Scott!",
    "Holy runtime error, Batman!",
    "By the power of clean code!",
    "This looks like a job for Super-Debugger!",
    "With great code comes great responsibility... and this isn't it!"
  ];
  
  const middles = {
    TypeError: [
      "The evil Type Mismatch has struck again, using its confusion ray!",
      "Your code has been exposed to type kryptonite!",
      "The Undefined Avenger has thwarted your variable's true identity!"
    ],
    ReferenceError: [
      "Captain Reference has vanished from the codebase dimension!",
      "The Variable Vanisher has struck, making your references disappear!",
      "Your reference has been trapped in the Phantom Zone of memory!"
    ],
    SyntaxError: [
      "The Syntax Smasher has left your code in ruins!",
      "Your brackets have been scattered by the evil Parenthesis Paradox!",
      "The Grammar Goblin has twisted your code into an unrecognizable form!"
    ],
    Default: [
      "The Legion of Bugs has infiltrated your otherwise heroic code!",
      "Your program's arch-nemesis, Error Man, strikes again!",
      "The sinister Bug Brotherhood has sabotaged your algorithm!"
    ]
  };
  
  const closings = [
    "Quick! To the Debug-mobile!",
    "Never fear! Stack Overflow is here!",
    "This looks like a job for Regular Expression Man!",
    "With your IDE powers combined, you can overcome this villainous bug!",
    "Remember: in the darkest debugging night, the green light of a passing test will guide you home!"
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Superhero style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Medieval Fantasy style
 * @param {string} error - The error message
 * @returns {string} Fantasy response
 */
function fantasyTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Fantasy phrases and templates
  const openings = [
    "Behold, a curse has befallen thy code!",
    "The ancient scrolls foretold of this error...",
    "By the beard of Merlin!",
    "A dark shadow has been cast upon thy program.",
    "The oracles of programming have sent a warning."
  ];
  
  const middles = {
    TypeError: [
      "The types have been enchanted by a mischievous sprite, causing chaos in the realm of variables.",
      "Thy attempt to transmute one type into another has failed, as the alchemical formula was flawed.",
      "The dragon of TypeError breathes its fiery breath upon thy code."
    ],
    ReferenceError: [
      "The variable thou seekest has been spirited away to the shadow realm.",
      "Thy reference points to the void, where no data dwells.",
      "The ghost of a deleted variable haunts thy code, leading thee astray."
    ],
    SyntaxError: [
      "Thy syntax is as twisted as a labyrinth designed by the Goblin King.",
      "The ancient runes of thy code have been misaligned, breaking the spell.",
      "The magical incantation is malformed, and thus the spell fails."
    ],
    Default: [
      "A curse most foul has corrupted thy algorithm.",
      "The dark forces of chaos have infiltrated thy once-pristine code.",
      "Thy program faces a trial by fire, and has been found wanting."
    ]
  };
  
  const closings = [
    "Seek the wisdom of the Elder Programmers to lift this curse.",
    "Only the Sword of Debugging, forged in the fires of Stack Overflow, can vanquish this foe.",
    "Cast the sacred spell of Console.log() to reveal the hidden truth.",
    "The quest to fix this error shall be perilous, but rewarding.",
    "May the gods of clean code guide thy hand in this dark hour."
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Fantasy style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a 1950s Sci-Fi B-Movie style
 * @param {string} error - The error message
 * @returns {string} B-Movie response
 */
function bMovieTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // B-Movie phrases and templates
  const openings = [
    "ATTENTION, EARTHLINGS!",
    "IT CAME FROM OUTER SPACE!",
    "BEWARE THE BLOB OF BAD CODE!",
    "INVASION OF THE BUG SNATCHERS!",
    "THE DAY THE FUNCTION STOOD STILL!"
  ];
  
  const middles = {
    TypeError: [
      "A MONSTROUS TYPE MISMATCH HAS ESCAPED FROM LABORATORY X!",
      "THE CREATURE FROM THE TYPE LAGOON IS ON THE LOOSE!",
      "SCIENTISTS WARNED ABOUT MIXING THESE TYPES, BUT NO ONE LISTENED!"
    ],
    ReferenceError: [
      "THE INVISIBLE VARIABLE STRIKES TERROR INTO THE HEARTS OF PROGRAMMERS!",
      "REFERENCE VANISHED IN MYSTERIOUS CIRCUMSTANCES! FOUL PLAY SUSPECTED!",
      "THE GHOST VARIABLE THAT HAUNTS YOUR CODE!"
    ],
    SyntaxError: [
      "SYNTAX MUTATED BY MYSTERIOUS COSMIC RAYS!",
      "ATTACK OF THE 50-FOOT PARSING ERROR!",
      "THE BRACKETS CAME FROM BEYOND SPACE AND TIME!"
    ],
    Default: [
      "ERROR OF UNKNOWN ORIGIN THREATENS MANKIND'S VERY EXISTENCE!",
      "SCIENTISTS BAFFLED BY STRANGE CODE PHENOMENON!",
      "THE THING THAT SHOULD NOT COMPILE!"
    ]
  };
  
  const closings = [
    "ONLY A DESPERATE DEBUG SESSION CAN SAVE HUMANITY NOW!",
    "CAN YOUR CODE BE SAVED, OR IS IT... TOO LATE?",
    "WILL MANKIND SURVIVE THIS PROGRAMMING HORROR? TUNE IN NEXT WEEK!",
    "THE END... OR IS IT JUST THE BEGINNING OF YOUR DEBUGGING NIGHTMARE?",
    "COMING SOON: RETURN OF THE FIXED CODE!"
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into B-Movie style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Social Media Influencer style
 * @param {string} error - The error message
 * @returns {string} Influencer response
 */
function influencerTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Influencer phrases and templates
  const openings = [
    "OMG you guys! 😱",
    "So today I had THE WORST coding experience! 🙈",
    "Hey fam! Don't you hate when this happens? 👇",
    "STORY TIME! My code just... I can't even! 🤦‍♀️",
    "Coding fail! But that's just part of the journey, right? 💯"
  ];
  
  const middles = {
    TypeError: [
      "I literally tried to use the wrong type and my code was like 'no thanks!' Major fail! 🙄",
      "Type mismatch is my toxic trait, ngl! But we're all learning, right? 💕",
      "My types are all over the place today! Not #sponsored by good programming practices lol! 🤣"
    ],
    ReferenceError: [
      "That awkward moment when your variable ghosts you harder than my ex! 👻",
      "I'm looking for this reference like it's my missing AirPods! Where did it go?! 🔍",
      "This undefined reference is giving very much 'error' vibes! Not a vibe! 🚫"
    ],
    SyntaxError: [
      "Syntax errors are my brand at this point! Bracket placement is NOT my superpower! 💁‍♀️",
      "The way my syntax is just completely chaotic today! Mercury retrograde much? ♈",
      "My code structure is messier than my room after a try-on haul! 👗"
    ],
    Default: [
      "This error is literally living rent-free in my code right now! 🏠",
      "Not me spending five hours debugging when I could be at brunch! 🥂",
      "The algorithm is NOT working in my favor today! So unfair! 😤"
    ]
  };
  
  const closings = [
    "Anyway, like and subscribe for more coding fails! 👍 #CodeLife #DevGirl",
    "Drop a comment if this has happened to you! 💬 #ProgrammerProblems",
    "Swipe up for my debugging routine! 👆 #SelfCare #CodeCare",
    "Don't forget to check out my new debugging course! Link in bio! 🔗",
    "Stay tuned for the fix reveal! ✨ #TransformationTuesday"
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Influencer style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Legal Jargon style
 * @param {string} error - The error message
 * @returns {string} Legal response
 */
function legalTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Legal phrases and templates
  const openings = [
    "NOTICE OF DEFICIENCY:",
    "WHEREAS, a certain error (hereinafter referred to as 'the Error') has been detected;",
    "ATTENTION: You are hereby notified of a code violation pursuant to Section 404 of the Programming Code;",
    "NOTICE: IN THE MATTER OF: Runtime Exception v. Your Code;",
    "To Whom It May Concern: This letter serves as formal notification of non-compliance;"
  ];
  
  const middles = {
    TypeError: [
      "the party of the first part (the 'Type') has been incorrectly associated with the party of the second part (the 'Value'), constituting a breach of the Type Agreement;",
      "a Type Mismatch has occurred, constituting a breach as defined in Appendix B, Paragraph 7, Subparagraph (iii) of the JavaScript Specification;",
      "the aforementioned TypeError constitutes prima facie evidence of a compliance breach;"
    ],
    ReferenceError: [
      "the referenced entity (hereinafter 'the Variable') was not properly declared or has been nullified prior to access, in violation of the Variable Scope Act;",
      "the defendant (your code) attempted to access a reference without first establishing its existence, a violation contrary to established precedent in 'Null v. Pointer' (2011);",
      "the referenced property was not found within the object's enumerable properties, as required by Section 3.2 of the Object Property Access Protocol;"
    ],
    SyntaxError: [
      "the syntax structure is in violation of the grammatical requirements set forth in the Language Specification, revision 2.1;",
      "improper bracket closure and/or semicolon omission has been detected, a breach of the Code Formatting Guidelines;",
      "the parser was unable to interpret the provided syntax, a violation of accepted standards of code construction;"
    ],
    Default: [
      "the code in question is in breach of the expectation to perform as reasonably expected by a programmer of ordinary skill in the art;",
      "a material defect and compliance violation has been identified in the execution of the program, causing substantial impairment to its intended functionality;",
      "the error constitutes a significant deviation from the expected behavior as documented in the relevant specifications, and all rights are reserved;"
    ]
  };
  
  const closings = [
    "REMEDY: You are advised to debug the offending code within thirty (30) days of this notice to avoid further complications.",
    "THEREFORE, it is strongly recommended that immediate corrective action be taken to rectify this situation.",
    "FAILURE to address this breach may result in cascading failures and is undertaken at your own risk.",
    "The injured party (the Program) reserves all rights and remedies available under the Debugging Protocol.",
    "This error notice is issued without prejudice to any additional errors that may be discovered upon further code review."
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Legal style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Transform error into a Cooking Recipe style
 * @param {string} error - The error message
 * @returns {string} Recipe response
 */
function recipeTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Recipe phrases and templates
  const openings = [
    "Recipe for Disaster: Error Soufflé",
    "Bug Stew: A Troubleshooting Delicacy",
    "Debugging Delight: A Step-by-Step Recipe",
    "Code Correction Casserole: Family-Style Fix",
    "Error-Free Coding: A Fresh Approach"
  ];
  
  const middles = {
    TypeError: [
      "Ingredients: 1 cup of confusion, 2 tablespoons of wrong data types, a pinch of hasty coding. Fold the wrong types together until thoroughly mixed up. Allow to crash for 2-3 minutes.",
      "Take one String and attempt to blend with Number. Notice how they refuse to mix properly, causing your code batter to curdle and separate.",
      "Your type mixture has failed to rise properly. You may have confused your ingredients, using a Boolean when the recipe clearly called for a String."
    ],
    ReferenceError: [
      "You seem to be missing a key ingredient: the variable should be prepared and declared before being added to your code mixture.",
      "Preparation error: You've referenced an item not found in your pantry of variables. Check your ingredients list before proceeding.",
      "This recipe requires all variables to be properly defined before mixing. Your attempt to use an undefined reference has left a bitter taste."
    ],
    SyntaxError: [
      "Your code batter contains lumps of mismatched brackets. Whisk thoroughly until smooth and properly nested.",
      "The syntax has been overcooked. For best results, ensure all parentheses are properly paired and semicolons added to taste.",
      "Your code grammar is underproofed. Allow brackets to rise in matching pairs before attempting to run your program."
    ],
    Default: [
      "This error has all the hallmarks of a rushed preparation. Slow down and follow each step of the algorithm carefully.",
      "Your code needs more time to simmer. Rushing the debugging process will only lead to half-baked solutions.",
      "This programming recipe has gone awry. Consider starting fresh with clean variables and well-structured functions."
    ]
  };
  
  const closings = [
    "Serving suggestion: Pair with a robust debugging tool and a glass of patience for best results.",
    "Allow your solution to rest for 5 minutes before testing again. Garnish with comments and serve to satisfied users.",
    "This recipe yields one working program. Store unused functions in an airtight container for future use.",
    "For a variation, try adding more error handling to create a more robust flavor profile in your code.",
    "Chef's note: Even experienced programmers occasionally burn their code. Don't be discouraged!"
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Recipe style
  return `${opening}<br><br>${middle}<br><br>${closing}`;
}

/**
 * Transform error into a Sports Commentary style
 * @param {string} error - The error message
 * @returns {string} Sports Commentary response
 */
function sportsTransformer(error) {
  // Extract key parts from the error
  const errorType = error.split(':')[0] || 'Error';
  const errorDetails = error.split(':')[1] || '';
  
  // Sports phrases and templates
  const openings = [
    "Ladies and gentlemen, we're witnessing a critical error in the fourth quarter of development!",
    "Oh! Unbelievable! The code has hit a major snag with this error!",
    "Welcome back to Code Center, where we're looking at a devastating bug in today's program.",
    "This is just incredible! An unexpected error has appeared out of nowhere!",
    "We've got a real nail-biter here as the developer faces a crucial error!"
  ];
  
  const middles = {
    TypeError: [
      "The programmer went for a type conversion and—OH! Rejected completely! That's going to hurt the runtime!",
      "We haven't seen type confusion like this since the infamous JavaScript Championship of '95!",
      "The compiler is calling a foul on that type mismatch! That's going to set the development team back significantly!"
    ],
    ReferenceError: [
      "The variable is nowhere to be found! It's like trying to pass to a player who's not even on the field!",
      "This reference is coming up null, Bob! You hate to see a rookie mistake like this at this level of programming!",
      "The code is looking for that reference, but it's been benched! Completely out of the execution context!"
    ],
    SyntaxError: [
      "That syntax is all over the place! The brackets are not matched up, and the parser is not happy about it!",
      "A devastating syntax error! The semicolons are missing, and the compiler is throwing the flag!",
      "The indentation is inconsistent, the brackets are mismatched—this code is playing like it's their first day in the league!"
    ],
    Default: [
      "This error is a game-changer, folks! The development team will need to regroup after this setback!",
      "We're seeing some sloppy code execution here today. This error could have been avoided with proper testing!",
      "The program has hit a wall! This is not what you want to see this late in the development cycle!"
    ]
  };
  
  const closings = [
    "Let's see if they can debug their way out of this one! Back to you in the studio.",
    "They'll need to take a timeout here and rethink their strategy before moving forward.",
    "This is why you always, ALWAYS check your types before submitting your code, folks!",
    "The clock is ticking! Can they fix this error before the deadline? Stay tuned!",
    "That's going to be a tough bug to fix, but that's why they play the game, folks!"
  ];
  
  // Select random elements
  const opening = randomItem(openings);
  const middle = randomItem(middles[errorType] || middles.Default);
  const closing = randomItem(closings);
  
  // Combine into Sports Commentary style
  return `${opening} ${middle} ${closing}`;
}

/**
 * Helper function to select a random item from an array
 * @param {Array} array - The array to select from
 * @returns {*} A random item from the array
 */
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Export transformers
export {
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