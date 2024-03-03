const { init } = require('./lib/userInput');
const { renderSvg } = require('./lib/svgRenderer');
const { writeToFile } = require('./lib/filerWriter');







    async function generateImage() {
        try {
            const userInput = await init();
            const svgContent = renderSvg(userInput);
            
            writeToFile('logo.svg', svgContent);

            console.log('Generated logo.svg');
        } catch (error) {
            console.error(error);
        }
    }
        generateImage();

