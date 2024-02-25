const Square = require('../Square.js');

describe('Square', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const square = new Square('red','JKF','yellow');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="75" text-anchor="middle" fill="yellow">JKF</text>
        </svg>
        `
        );
    });
});