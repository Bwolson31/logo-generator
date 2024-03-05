
const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('renders triangle with blue color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        const svg = triangle.render();
        expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')

});
});
describe('Circle', () => {
    test('renders circle with red color', () => {
        const circle = new Circle();
        circle.setColor('red');
        const svg = circle.render();
        expect(svg).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

describe('Square', () => {
    test('renders square with green color', () => {
        const square = new Square();
        square.setColor('green');
        const svg = square.render();
        expect(svg).toEqual('<rect width="80%" height="80%" x="10%" y="10%" fill="green" />');
    });
});
