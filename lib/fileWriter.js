
const fs = require('fs');

function writeToFile(filename, content) {
    try {
        fs.writeFile('logo.svg', content, (error) => {
            if (error) {
                console.error(`Error writing logo.svg: ${error.message}`);
            }
        });
    } catch (error) {
        console.error(`Error writing to logo.svg': ${error.message}`);
        throw error;
    }
}


module.exports = { writeToFile };
