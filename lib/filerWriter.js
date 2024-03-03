
const fs = require('fs');

function writeToFile(fileName, content) {
    try {
        fs.writeFileSync(fileName, content);
        console.log(`File '${fileName}' successfully written.`);
    } catch (error) {
        console.error(`Error writing to file '${fileName}': ${error.message}`);
        throw error; 
    }
}

module.exports = { writeToFile };
