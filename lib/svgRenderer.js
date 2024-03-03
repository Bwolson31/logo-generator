
const { Triangle, Circle, Square } = require('./shapes');

function renderSvg(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;

    let selectedShape;

    // Determine which shape class to use based on user input
    switch (shape) {
        case 'circle':
            selectedShape = new Circle();
            break;
        case 'triangle':
            selectedShape = new Triangle();
            break;
        case 'square':
            selectedShape = new Square();
            break;
        default:
            throw new Error(`Invalid shape: ${shape}`);
    }

    selectedShape.setColor(shapeColor);

  const svgContent = `
        <svg width="300" height="200">
            ${selectedShape.render()}
            <text x="50%" y="50%" fill="${textColor}" font-size="48" text-anchor="middle" alignment-baseline="middle">${text}</text>
        </svg>
    `;
    return svgContent;
}

module.exports = { renderSvg };
