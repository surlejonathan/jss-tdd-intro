const assert = require('assert');

const capitalizeFirstLetters = (string) => {
    return string.length > 0 ?
    string.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" "):
    '';
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('this is a test'), 'This Is A Test');
assert.strictEqual(capitalizeFirstLetters('yes'), 'Yes');
assert.strictEqual(capitalizeFirstLetters('y'), 'Y');
assert.strictEqual(capitalizeFirstLetters(''), '');