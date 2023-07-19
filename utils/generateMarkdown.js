// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0 License') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }else if(license =='MIT License'){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }else if(license =='Mozilla Public License 2.0'){
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }else if(license == 'The Unlicense'){
    return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
  }else{
  return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  }else{
  return `\n* [License](#license)\n`;}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'Apache 2.0 License') {
    return `## License

This project is licensed under the Apache 2.0 license.\nhttps://opensource.org/licenses/Apache-2.0`;
  }else if(license =='MIT License'){
    return `## License

This project is licensed under the MIT license.\nhttps://opensource.org/licenses/MIT`;
  }else if(license =='Mozilla Public License 2.0'){
    return `## License

This project is licensed under the Mozilla Public License 2.0.\nhttps://opensource.org/licenses/MPL-2.0`;
  }else if(license =='The Unlicense'){
    return `## License

This project is licensed under The Unlicense license.\nhttps://choosealicense.com/licenses/unlicense/`;
  }else{
  return '';
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
return`# ${data.title} 
${renderLicenseBadge(data.license)}                                                                             


## Table of Contents
* [Description](#descrition)

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)


* [Test](#test)

* [Questions](#questions)


## Description
${data.description}



## Installation

To istall the necessary dependencies for this project, please run the folowing command:
\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Test

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions
Visit my github page https://www.github.com/${data.userName} to check out my other projects!\n
Email me with any questions via ${data.email}`

}


module.exports = generateMarkdown;





