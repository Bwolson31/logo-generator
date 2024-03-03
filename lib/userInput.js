const { prompt } = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
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


async function init() {
    try {
        const responses = await prompt(questions);
        return responses;
    } catch (error) {
        console.error('Error during user input:', error);
        throw error;
    }
}
module.exports = { init };