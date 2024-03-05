
const { init } = require('./lib/userInput');
const { renderSvg } = require('./lib/svgRenderer');
const { writeToFile } = require('./lib/fileWriter');
const { prompt } = require('inquirer');

async function generateImage() {
    try {
      
        const userInput = await init();
        const svgContent = renderSvg(userInput);

        // Write to the specified filename
        writeToFile(userInput.filename, svgContent);

        console.log(`Generated logo.svg`);
    } catch (error) {
        console.error(error);
    }
}

generateImage();
