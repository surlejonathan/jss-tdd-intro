const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
    it('is actually a square, as "isSquare" method returns "true"', () => {
        const rectangle = new Rectangle (10, 10);
        assert.strictEqual(rectangle.isSquare(), true)
    });

    it('is obviously a rectangle as "isSquare" method returns "false"', () => {
        const rectangle = new Rectangle (25, 10);
        assert.strictEqual(rectangle.isSquare(), false);
    });

    it('gets a correct area', () => {
        const rectangle = new Rectangle (13, 7);
        assert.strictEqual(rectangle.getArea(), 91);
    });

    it('gets a correct perimeter', () => {
        const rectangle = new Rectangle (13, 7);
        assert.strictEqual(rectangle.getPerimeter(), 40);
    });
})