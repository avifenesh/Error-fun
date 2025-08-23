import { 
  confuciusTransformer,
  haikuTransformer, 
  tarotTransformer,
  blameTransformer,
  zenTransformer,
  motivationalTransformer,
  techSupportTransformer
} from '../src/js/transformers.js';
import { mockingTransformer } from '../src/js/mocking-transformers.js';
import { 
  starWarsTransformer,
  matrixTransformer,
  memeTransformer,
  hitchhikerTransformer
} from '../src/js/nerdy-transformers.js';

const testError = 'TypeError: Cannot read property "length" of undefined';

describe('Original Transformers', () => {
  test('confuciusTransformer returns wisdom', () => {
    const result = confuciusTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/confucius|ancient|wise|developer|programmer|coder/);
  });

  test('haikuTransformer returns haiku format', () => {
    const result = haikuTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result).toMatch(/<br>/); // Haiku should have line breaks
  });

  test('tarotTransformer returns mystical reading', () => {
    const result = tarotTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/tarot|reveals|position|digital|card/);
    expect(result).toMatch(/<strong>/); // Should have formatted card name
  });

  test('blameTransformer deflects blame creatively', () => {
    const result = blameTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/cosmic|quantum|mercury|solar|butterfly|jupiter|mars|heisenberg|multiverse/);
  });

  test('zenTransformer provides meditation', () => {
    const result = zenTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/breathe|wisdom|understanding|path|meditation|garden|growth|clarity|solution|enlightenment/);
  });

  test('motivationalTransformer motivates', () => {
    const result = motivationalTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result).toMatch(/<strong>/); // Should have formatted title
    expect(result).toMatch(/<br>/); // Should have line breaks
  });

  test('techSupportTransformer gives support response', () => {
    const result = techSupportTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/try|restart|check|problem|error|computer|code|machine/);
  });
});

describe('Mocking Transformers', () => {
  test('mockingTransformer returns a mocking response', () => {
    const result = mockingTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/wow|really|congratulations|rookie|horror|story|variable|wouldn't die|computer|idea|doing/);
  });
});

describe('Nerdy Transformers', () => {
  test('starWarsTransformer returns Star Wars quote', () => {
    const result = starWarsTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/star wars|force|jedi|sith|may the|do or do not|try|ignore|key|situation|typeerror/);
  });

  test('matrixTransformer returns Matrix quote', () => {
    const result = matrixTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/matrix|neo|pill|rabbit|system|unplugged|dependent|protect|typeerror/);
  });

  test('memeTransformer returns programming meme', () => {
    const result = memeTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result).toMatch(/🤷‍♂️|🔄|🔥|✅|💀|😅|📝|😤|🎯|🍫|🔍|😴|🍃|⏰|👻|🔫|🎨|🧮|😂|📚/);
  });

  test('hitchhikerTransformer returns Hitchhiker\'s Guide quote', () => {
    const result = hitchhikerTransformer(testError);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result.toLowerCase()).toMatch(/42|universe|don't panic|restaurant|probability|typeerror/);
  });
});

describe('Integration Tests', () => {
  test('all transformers handle different error types', () => {
    const errors = [
      'ReferenceError: x is not defined',
      'SyntaxError: Unexpected token {',
      'RangeError: Maximum call stack size exceeded',
      'Error: Network request failed'
    ];
    
    const allTransformers = [
      confuciusTransformer,
      haikuTransformer,
      tarotTransformer,
      blameTransformer,
      zenTransformer,
      motivationalTransformer,
      techSupportTransformer,
      mockingTransformer,
      starWarsTransformer,
      matrixTransformer,
      memeTransformer,
      hitchhikerTransformer
    ];
    
    errors.forEach(error => {
      allTransformers.forEach(transformer => {
        expect(() => transformer(error)).not.toThrow();
      });
    });
  });

  test('transformers handle empty or malformed input gracefully', () => {
    const badInputs = ['', '   ', 'JustSomeText', ':NoErrorType'];
    
    const allTransformers = [
      confuciusTransformer,
      haikuTransformer,
      tarotTransformer,
      blameTransformer,
      zenTransformer,
      motivationalTransformer,
      techSupportTransformer,
      mockingTransformer,
      starWarsTransformer,
      matrixTransformer,
      memeTransformer,
      hitchhikerTransformer
    ];
    
    badInputs.forEach(input => {
      allTransformers.forEach(transformer => {
        expect(() => transformer(input)).not.toThrow();
      });
    });
  });

  test('all transformers return unique results for same input', () => {
    const allTransformers = [
      confuciusTransformer,
      haikuTransformer,
      tarotTransformer,
      blameTransformer,
      zenTransformer,
      motivationalTransformer,
      techSupportTransformer,
      mockingTransformer,
      starWarsTransformer,
      matrixTransformer,
      memeTransformer,
      hitchhikerTransformer
    ];
    
    const results = allTransformers.map(transformer => transformer(testError));
    const uniqueResults = new Set(results);
    
    // Each transformer should return a different result
    expect(uniqueResults.size).toBeGreaterThan(results.length * 0.8); // Allow some overlap due to randomness
  });
});