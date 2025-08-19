/**
 * Error Message Fortune Cookies
 * Main JavaScript file
 */

// Namespace for the application
const ErrorFortune = (function() {
    // Private variables
    let config = {
        animation: true,
        defaultStyle: 'confucius',
        defaultTheme: 'zen'
    };
    
    // Cache DOM elements
    let elements = {};
    
    /**
     * Initialize the application
     * @param {Object} options - Configuration options
     */
    function init(options = {}) {
        // Merge options with defaults
        config = { ...config, ...options };
        
        // Cache DOM elements
        cacheElements();
        
        // Set up event listeners
        bindEvents();
        
        // Initialize custom elements
        initCustomElements();
        
        console.log('Error Fortune Cookies initialized');
    }
    
    /**
     * Cache DOM elements for later use
     */
    function cacheElements() {
        elements.form = document.getElementById('error-form');
        elements.errorInput = document.getElementById('error-message');
        elements.fortuneDisplay = document.getElementById('fortune-display');
        elements.fortuneActions = document.getElementById('fortune-actions');
        elements.embedSection = document.getElementById('embed-code-section');
        elements.embedCodeDisplay = document.getElementById('embed-code-display');
        elements.jsApiDisplay = document.getElementById('js-api-display');
    }
    
    /**
     * Set up event listeners
     */
    function bindEvents() {
        // Form submission
        if (elements.form) {
            elements.form.addEventListener('submit', handleFormSubmit);
        }
        
        // Action buttons
        if (elements.fortuneActions) {
            document.getElementById('copy-image').addEventListener('click', copyAsImage);
            document.getElementById('copy-link').addEventListener('click', copyLink);
            document.getElementById('download').addEventListener('click', downloadFortune);
            document.getElementById('embed-code').addEventListener('click', showEmbedCode);
        }
        
        // Copy buttons
        if (elements.embedSection) {
            document.getElementById('copy-embed').addEventListener('click', () => copyToClipboard(elements.embedCodeDisplay.textContent));
            document.getElementById('copy-js').addEventListener('click', () => copyToClipboard(elements.jsApiDisplay.textContent));
        }
    }
    
    /**
     * Handle form submission
     * @param {Event} e - Form submit event
     */
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const errorMessage = elements.errorInput.value.trim();
        if (!errorMessage) {
            alert('Please enter an error message');
            return;
        }
        
        const style = document.querySelector('input[name="style"]:checked').value;
        const theme = document.querySelector('input[name="theme"]:checked').value;
        
        crack(errorMessage, {
            style,
            theme,
            target: 'fortune-display'
        });
    }
    
    /**
     * Main function to generate and display a fortune
     * @param {string} errorMessage - The error message to transform
     * @param {Object} options - Configuration options
     */
    function crack(errorMessage, options = {}) {
        // Merge options with defaults
        const opts = {
            style: config.defaultStyle,
            theme: config.defaultTheme,
            animation: config.animation,
            target: null,
            callback: null,
            ...options
        };
        
        // Generate the fortune
        const fortune = generateFortune(errorMessage, opts.style);
        
        // Display the fortune
        if (opts.target) {
            const targetElement = typeof opts.target === 'string' 
                ? document.getElementById(opts.target) 
                : opts.target;
                
            if (targetElement) {
                displayFortune(targetElement, fortune, opts);
            }
        }
        
        // Show action buttons
        if (elements.fortuneActions) {
            elements.fortuneActions.classList.remove('hidden');
        }
        
        // Update embed code
        updateEmbedCode(errorMessage, opts);
        
        // Execute callback if provided
        if (typeof opts.callback === 'function') {
            opts.callback(fortune);
        }
        
        return fortune;
    }
    
    /**
     * Generate a fortune based on the error message and style
     * @param {string} errorMessage - The error message to transform
     * @param {string} style - The fortune style to use
     * @returns {Object} The generated fortune
     */
    function generateFortune(errorMessage, style) {
        // Get the appropriate transformer for the style
        const transformer = transformers[style] || transformers.confucius;
        
        // Transform the error message
        const wisdom = transformer(errorMessage);
        
        return {
            original: errorMessage,
            wisdom,
            style,
            timestamp: new Date().toISOString()
        };
    }
    
    /**
     * Display a fortune in the target element
     * @param {HTMLElement} target - The element to display the fortune in
     * @param {Object} fortune - The fortune to display
     * @param {Object} options - Display options
     */
    function displayFortune(target, fortune, options) {
        // Clear previous content
        target.innerHTML = '';
        
        // Add theme class
        target.className = `fortune-display ${options.theme}`;
        
        // Create fortune elements
        const fortuneElement = document.createElement('div');
        fortuneElement.className = `fortune ${fortune.style}`;
        
        // Create cookie container
        const cookieContainer = document.createElement('div');
        cookieContainer.className = 'cookie-container';
        
        // Add cookie SVG
        cookieContainer.innerHTML = getCookieSVG(options.animation);
        
        // Create fortune content
        const fortuneContent = document.createElement('div');
        fortuneContent.className = 'fortune-content';
        
        // Add error message
        const errorElement = document.createElement('p');
        errorElement.className = 'error';
        errorElement.textContent = fortune.original;
        fortuneContent.appendChild(errorElement);
        
        // Add wisdom
        const wisdomElement = document.createElement('p');
        wisdomElement.className = 'wisdom';
        wisdomElement.innerHTML = fortune.wisdom;
        fortuneContent.appendChild(wisdomElement);
        
        // Assemble the fortune
        fortuneElement.appendChild(cookieContainer);
        fortuneElement.appendChild(fortuneContent);
        
        // Add to target
        target.appendChild(fortuneElement);
        
        // Trigger animation if enabled
        if (options.animation) {
            setTimeout(() => {
                cookieContainer.querySelector('.cookie').classList.add('cracked');
                fortuneContent.classList.add('visible');
            }, 500);
        } else {
            cookieContainer.querySelector('.cookie').classList.add('cracked');
            fortuneContent.classList.add('visible');
        }
    }
    
    /**
     * Update the embed code displays
     * @param {string} errorMessage - The error message
     * @param {Object} options - The options used
     */
    function updateEmbedCode(errorMessage, options) {
        if (elements.embedCodeDisplay) {
            elements.embedCodeDisplay.textContent = 
                `<error-fortune message="${escapeHtml(errorMessage)}" style="${options.style}" theme="${options.theme}"></error-fortune>`;
        }
        
        if (elements.jsApiDisplay) {
            elements.jsApiDisplay.textContent = 
                `ErrorFortune.crack("${escapeHtml(errorMessage)}", {\n  style: "${options.style}",\n  theme: "${options.theme}"\n});`;
        }
    }
    
    /**
     * Show the embed code section
     */
    function showEmbedCode() {
        if (elements.embedSection) {
            elements.embedSection.classList.remove('hidden');
            // Scroll to embed section
            elements.embedSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    /**
     * Copy the current fortune as an image
     */
    function copyAsImage() {
        // This would require html2canvas or similar library
        alert('Image copying feature coming soon!');
    }
    
    /**
     * Copy a shareable link to the current fortune
     */
    function copyLink() {
        const errorMessage = elements.errorInput.value.trim();
        const style = document.querySelector('input[name="style"]:checked').value;
        const theme = document.querySelector('input[name="theme"]:checked').value;
        
        // Create URL with parameters
        const url = new URL(window.location.href);
        url.searchParams.set('error', encodeURIComponent(errorMessage));
        url.searchParams.set('style', style);
        url.searchParams.set('theme', theme);
        
        copyToClipboard(url.toString());
        alert('Link copied to clipboard!');
    }
    
    /**
     * Download the current fortune as an image
     */
    function downloadFortune() {
        // This would require html2canvas or similar library
        alert('Download feature coming soon!');
    }
    
    /**
     * Copy text to clipboard
     * @param {string} text - The text to copy
     */
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
    
    /**
     * Initialize custom elements for embedding
     */
    function initCustomElements() {
        if (window.customElements && !customElements.get('error-fortune')) {
            customElements.define('error-fortune', class extends HTMLElement {
                connectedCallback() {
                    const message = this.getAttribute('message');
                    const style = this.getAttribute('style') || config.defaultStyle;
                    const theme = this.getAttribute('theme') || config.defaultTheme;
                    const animation = this.hasAttribute('animation') ? 
                        this.getAttribute('animation') !== 'false' : config.animation;
                    
                    if (message) {
                        crack(message, {
                            style,
                            theme,
                            animation,
                            target: this
                        });
                    }
                }
            });
        }
    }
    
    /**
     * Get the SVG for the fortune cookie
     * @param {boolean} animated - Whether to include animation classes
     * @returns {string} The SVG HTML
     */
    function getCookieSVG(animated = true) {
        const animClass = animated ? 'animated' : '';
        return `
            <div class="cookie ${animClass}">
                <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    <path class="cookie-top" d="M20,50 Q100,10 180,50" stroke="#D2B48C" stroke-width="10" fill="#F5DEB3" />
                    <path class="cookie-bottom" d="M20,50 Q100,90 180,50" stroke="#D2B48C" stroke-width="10" fill="#F5DEB3" />
                    <path class="fortune-paper" d="M90,50 L110,50 L110,30 L90,30 Z" fill="white" />
                </svg>
            </div>
        `;
    }
    
    /**
     * Escape HTML special characters
     * @param {string} html - The string to escape
     * @returns {string} The escaped string
     */
    function escapeHtml(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }
    
    // Transformers for different fortune styles
    const transformers = {
        /**
         * Transform error into Confucius-style wisdom
         * @param {string} error - The error message
         * @returns {string} Confucius wisdom
         */
        confucius: function(error) {
            // Extract key parts from the error
            const errorType = error.split(':')[0] || 'Error';
            const errorDetails = error.split(':')[1] || '';
            
            // Sample templates
            const templates = [
                "Confucius say: Man who {action} {subject} find himself {consequence}.",
                "Ancient wisdom tell us: Those who {action} will surely {consequence}.",
                "Path to enlightenment never {action}. Wise developer {alternative}.",
                "In garden of code, {subject} cannot grow without {requirement}.",
                "Confucius say: {errorType} today leads to wisdom tomorrow, but only if you {solution}."
            ];
            
            // Sample actions based on error types
            const actions = {
                TypeError: ["measure nothing", "confuse types", "expect stone to be water"],
                ReferenceError: ["seek what does not exist", "reference shadows", "call upon ghost variables"],
                SyntaxError: ["speak incorrect language", "misplace sacred symbols", "forget ancient grammar"],
                RangeError: ["exceed boundaries", "ask too much of too little", "demand infinity from finite resource"],
                Default: ["rush code", "skip testing", "ignore compiler wisdom"]
            };
            
            // Sample consequences
            const consequences = [
                "coming up short",
                "walking path of many bugs",
                "drinking from empty cup",
                "building house on shifting sand",
                "chasing own tail for many hours"
            ];
            
            // Sample alternatives/solutions
            const solutions = [
                "check twice, code once",
                "consult ancient documentation",
                "meditate upon types before using",
                "seek wisdom in stack overflow",
                "embrace power of console.log"
            ];
            
            // Select random template
            const template = templates[Math.floor(Math.random() * templates.length)];
            
            // Get appropriate actions or fallback to default
            const actionList = actions[errorType] || actions.Default;
            const action = actionList[Math.floor(Math.random() * actionList.length)];
            
            // Select random consequence and solution
            const consequence = consequences[Math.floor(Math.random() * consequences.length)];
            const solution = solutions[Math.floor(Math.random() * solutions.length)];
            
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
                .replace("{requirement}", "proper care");
        },
        
        /**
         * Transform error into a haiku
         * @param {string} error - The error message
         * @returns {string} Error haiku
         */
        haiku: function(error) {
            // Extract key parts from the error
            const errorType = error.split(':')[0] || 'Error';
            
            // Sample first lines (5 syllables)
            const firstLines = [
                "Silent exception",
                "Code refuses work",
                "Functions returning",
                "Null pointer beckons",
                "Variables lost"
            ];
            
            // Sample second lines (7 syllables)
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
                    "Logic twisted into knots"
                ]
            };
            
            // Sample third lines (5 syllables)
            const thirdLines = [
                "Debug through the night",
                "Stack trace tells no lies",
                "Restart and try again",
                "Silence fills the screen",
                "Code begins to break"
            ];
            
            // Select random lines
            const firstLine = firstLines[Math.floor(Math.random() * firstLines.length)];
            
            // Get appropriate second lines or fallback to default
            const secondLineOptions = secondLines[errorType] || secondLines.Default;
            const secondLine = secondLineOptions[Math.floor(Math.random() * secondLineOptions.length)];
            
            const thirdLine = thirdLines[Math.floor(Math.random() * thirdLines.length)];
            
            // Combine into haiku
            return `${firstLine}<br>${secondLine}<br>${thirdLine}`;
        },
        
        /**
         * Transform error into tarot card reading
         * @param {string} error - The error message
         * @returns {string} Tarot reading
         */
        tarot: function(error) {
            // Extract key parts from the error
            const errorType = error.split(':')[0] || 'Error';
            const errorDetails = error.split(':')[1] || '';
            
            // Define tarot cards based on error types
            const cards = {
                TypeError: ["The Type Mismatch", "The Undefined Variable", "The Null Object"],
                ReferenceError: ["The Missing Reference", "The Uninitialized Variable", "The Empty Scope"],
                SyntaxError: ["The Broken Syntax", "The Mismatched Bracket", "The Missing Semicolon"],
                RangeError: ["The Boundary Crosser", "The Infinite Loop", "The Stack Overflow"],
                Default: ["The Bug", "The Compiler Warning", "The Runtime Exception"]
            };
            
            // Select appropriate card or fallback to default
            const cardList = cards[errorType] || cards.Default;
            const card = cardList[Math.floor(Math.random() * cardList.length)];
            
            // Determine if card is upright or reversed
            const position = Math.random() > 0.5 ? "upright" : "reverse";
            
            // Templates for readings
            const templates = [
                "{card} appears in {position} position. {interpretation} {advice}",
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
            const template = templates[Math.floor(Math.random() * templates.length)];
            const interpretation = interpretations[position][Math.floor(Math.random() * interpretations[position].length)];
            const selectedAdvice = advice[Math.floor(Math.random() * advice.length)];
            
            // Fill in the template
            return template
                .replace("{card}", card)
                .replace("{position}", position)
                .replace("{interpretation}", interpretation)
                .replace("{advice}", selectedAdvice);
        },
        
        /**
         * Transform error into blame deflection
         * @param {string} error - The error message
         * @returns {string} Blame deflection
         */
        blame: function(error) {
            // Sample excuses
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
                "The error is actually a feature if you look at it from a non-Euclidean perspective."
            ];
            
            // Select random excuse
            return excuses[Math.floor(Math.random() * excuses.length)];
        },
        
        /**
         * Transform error into zen meditation style
         * @param {string} error - The error message
         * @returns {string} Zen meditation
         */
        zen: function(error) {
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
            const opening = openings[Math.floor(Math.random() * openings.length)];
            const middleList = middles[errorType] || middles.Default;
            const middle = middleList[Math.floor(Math.random() * middleList.length)];
            const closing = closings[Math.floor(Math.random() * closings.length)];
            
            // Combine into zen meditation
            return `${opening}, ${middle}. ${closing}`;
        },
        
        /**
         * Transform error into motivational poster text
         * @param {string} error - The error message
         * @returns {string} Motivational text
         */
        motivational: function(error) {
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
            const titleList = titles[errorType] || titles.Default;
            const title = titleList[Math.floor(Math.random() * titleList.length)];
            
            // Select random quote
            const quote = quotes[Math.floor(Math.random() * quotes.length)];
            
            // Format as motivational poster
            return `<strong>${title}</strong><br><br>${quote}`;
        }
    };
    
    // Public API
    return {
        init,
        crack,
        transformers
    };
})();

// Auto-initialize if in browser context
if (typeof window !== 'undefined') {
    // Check for URL parameters
    window.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const errorParam = urlParams.get('error');
        
        if (errorParam) {
            const style = urlParams.get('style') || 'confucius';
            const theme = urlParams.get('theme') || 'zen';
            
            // Set form values
            const errorInput = document.getElementById('error-message');
            if (errorInput) {
                errorInput.value = decodeURIComponent(errorParam);
            }
            
            // Set style radio
            const styleRadio = document.querySelector(`input[name="style"][value="${style}"]`);
            if (styleRadio) {
                styleRadio.checked = true;
            }
            
            // Set theme radio
            const themeRadio = document.querySelector(`input[name="theme"][value="${theme}"]`);
            if (themeRadio) {
                themeRadio.checked = true;
            }
            
            // Generate fortune
            setTimeout(() => {
                ErrorFortune.crack(decodeURIComponent(errorParam), {
                    style,
                    theme,
                    target: 'fortune-display'
                });
            }, 500);
        }
    });
}