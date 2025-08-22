import test from 'node:test';
import assert from 'node:assert';
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

const testError = 'TypeError: Cannot read property "length" of undefined';

test('confuciusTransformer returns wisdom', () => {
  const result = confuciusTransformer(testError);
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
  assert.ok(result.toLowerCase().match(/confucius|ancient|wise/));
});

test('haikuTransformer returns haiku format', () => {
  const result = haikuTransformer(testError);
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
  assert.ok(result.match(/<br>/)); // Haiku should have line breaks
});

test('tarotTransformer returns mystical reading', () => {
  const result = tarotTransformer(testError);
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
  assert.ok(result.toLowerCase().match(/tarot|reveals|position/));
  assert.ok(result.match(/<strong>/)); // Should have formatted card name
});

test('blameTransformer deflects blame creatively', () => {
  const result = blameTransformer(testError);
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
  assert.ok(result.toLowerCase().match(/cosmic|quantum|mercury|solar|butterfly/));
});

test('zenTransformer provides meditation', () => {
  const result = zenTransformer(testError);
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
  assert.ok(result.toLowerCase().match(/breathe|wisdom|understanding|path|meditation/));
});

test('motivationalTransformer motivates', () => {
  const result = motivationalTransformer(testError);
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
  assert.ok(result.match(/<strong>/)); // Should have formatted title
  assert.ok(result.match(/<br>/)); // Should have line breaks
});

test('techSupportTransformer gives support response', () => {
  const result = techSupportTransformer(testError);
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
  assert.ok(result.toLowerCase().match(/try|restart|check|problem|error/));
});

test('mockingTransformer returns a mocking response', () => {
  const result = mockingTransformer(testError);
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
  assert.ok(result.toLowerCase().match(/wow|really|congratulations|rookie/));
});

test('all transformers handle different error types', () => {
  const errors = [
    'ReferenceError: x is not defined',
    'SyntaxError: Unexpected token {',
    'RangeError: Maximum call stack size exceeded',
    'Error: Network request failed'
  ];
  
  errors.forEach(error => {
    assert.doesNotThrow(() => confuciusTransformer(error));
    assert.doesNotThrow(() => haikuTransformer(error));
    assert.doesNotThrow(() => tarotTransformer(error));
    assert.doesNotThrow(() => blameTransformer(error));
    assert.doesNotThrow(() => zenTransformer(error));
    assert.doesNotThrow(() => motivationalTransformer(error));
    assert.doesNotThrow(() => techSupportTransformer(error));
    assert.doesNotThrow(() => mockingTransformer(error));
  });
});

test('transformers handle empty or malformed input gracefully', () => {
  const badInputs = ['', '   ', 'JustSomeText', ':NoErrorType'];
  
  badInputs.forEach(input => {
    assert.doesNotThrow(() => confuciusTransformer(input));
    assert.doesNotThrow(() => haikuTransformer(input));
    assert.doesNotThrow(() => tarotTransformer(input));
    assert.doesNotThrow(() => blameTransformer(input));
    assert.doesNotThrow(() => zenTransformer(input));
    assert.doesNotThrow(() => motivationalTransformer(input));
    assert.doesNotThrow(() => techSupportTransformer(input));
    assert.doesNotThrow(() => mockingTransformer(input));
  });
});