// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

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
        name: 'deployUrl',
        message: 'What is the web address for the deployment of this project?',
    },
    {
        type: 'input',
        name: 'codeUrl',
        message: 'What is the web address for the repo of this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the link for the screenshot/gif of this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What type of license is assigned to this project?',
        choices: ["none",'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', `BSD 2-Clause "Simplified" License`, `BSD 3-Clause "New" or "Revised" License`, "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
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

const generateReadme = ({ title, description, deployUrl, codeUrl, usage, license, userName, email }) =>
`# ${title}

## Table of Contents
[Description](#descrition)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)


[Test](#test)

[Questions](#questions)


## Description
${description}



## Installation

the web address for this project is:

${deployUrl}

The reference code can be accessed here:

${codeUrl}

## Usage

simply navigate to the website or source code to interact with this project.

Here is a screenshot/gif that shows the functionality of the site(it takes a second to load)

![alt text](${usage})


## License
${license}

## Contributing

## Test

## Questions
Visit my github page https://www.github.com/${userName}
email me with any questions ${email}`

inquirer
    .prompt(questions)
    .then((answers) => {
        const readMeContent = generateReadme(answers);
    
        fs.writeFile('README.md', readMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}






// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
