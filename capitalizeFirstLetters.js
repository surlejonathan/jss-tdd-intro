const assert = require('assert');


assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('this is a test'), 'This Is A Test');
assert.strictEqual(capitalizeFirstLetters('yes'), 'Yes');
assert.strictEqual(capitalizeFirstLetters('y'), 'Y');
assert.strictEqual(capitalizeFirstLetters(''), '');