const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
    it('is a function accepting only one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transforms the sentence "this is a test" correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('this is a test'), 'This Is A Test');
    });

    it('works for just a word', () => {
        assert.strictEqual(capitalizeFirstLetters('yes'), 'Yes');
    });

    it('works for a one-letter word', () => {
        assert.strictEqual(capitalizeFirstLetters('y'), 'Y');
    });

    it('works for an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
})




