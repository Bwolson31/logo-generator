
const { Triangle, Circle, Square } = require('./shapes');

function renderSvg(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;

    let selectedShape;

    // Decide which shape class to use based on user input
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

    let textYPosition = 110; // Default y position for text

    // If the selected shape is a triangle, change the y-coordinate for the text
    if (shape === 'triangle') {
        textYPosition = 150;
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${selectedShape.render()}
            <text x="50%" y="${textYPosition}" fill="${textColor}" font-size="64" text-anchor="middle" alignment-baseline="middle">${text}</text>
        </svg>
    `;
    return svgContent;
}

module.exports = { renderSvg };