// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
     {
        type: 'input',
        name: 'description',
        message: 'Provide a description of you project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license is assigned to this project?',
        choices: ['None', 'Apache 2.0 License', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },  
];

//Run inquirer and generate the readme. 

inquirer
    .prompt(questions)
    .then((answers) => {
        const readMeContent = generateMarkdown(answers);
        fs.writeFile('README.md', readMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });