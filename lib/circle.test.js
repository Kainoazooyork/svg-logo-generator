const Circle = require('./circle.js');

describe('Circle', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const circle = new Circle('blue','JKF','yellow');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue" />
            <text x="150" y="125" font-size="75" text-anchor="middle" fill="yellow">JKF</text>
        </svg>
        `
        );
    });
});