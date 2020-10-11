const assert = require('assert');

const capitalizeFirstLetters = (string) => {
    const words = string.split(' ');
    let newString = '';

    for (let word of words) {
        if (string.length > 0) {
            newString += word[0].toUpperCase() + word.slice(1) + " ";
        } else {
            newString = '';
        }   
    }
    return newString.trim();
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('this is a test'), 'This Is A Test');
assert.strictEqual(capitalizeFirstLetters('yes'), 'Yes');
assert.strictEqual(capitalizeFirstLetters('y'), 'Y');
assert.strictEqual(capitalizeFirstLetters(''), '');