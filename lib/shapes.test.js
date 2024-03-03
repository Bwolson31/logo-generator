
const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('renders triangle with blue color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        const svg = triangle.render();
        expect(svg).toEqual('<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue" /></svg>')

});
});
describe('Circle', () => {
    test('renders circle with red color', () => {
        const circle = new Circle();
        circle.setColor('red');
        const svg = circle.render();

        expect(svg).toEqual('<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="red" /></svg>');
    });
});

describe('Square', () => {
    test('renders square with green color', () => {
        const square = new Square();
        square.setColor('green');
        const svg = square.render();

        expect(svg).toEqual('<svg width="300" height="200"><rect width="80%" height="80%" x="10%" y="10%" fill="green" /></svg>');
    });
});
