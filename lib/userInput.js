const { prompt } = require('inquirer');

// questions that prompt will ask user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
            const isValid = input.length <=3; 
            return isValid ? true : 'Please enter up to three characters.';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: (answers) => `Enter ${answers.shape} color (keyword or hex):`,
    },

];

// function related to questions
async function init() {
  
        const responses = await prompt(questions);
        return responses;
}
module.exports = { init };