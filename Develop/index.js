const fs = require('fs');
const inquirer = require("inquirer");
const licenses = [
    "MIT License", 
    "Apache License 2.0", 
    "GNU General Public License (GPL) v3", 
    "GNU Lesser General Public License (LGPL) v3", 
    "BSD 2-Clause License (Simplified BSD License)", 
    "BSD 3-Clause License (Modified BSD License)", 
    "Mozilla Public License 2.0", 
    "Creative Commons CC0", 
    "Unlicense", 
    "Eclipse Public License 2.0"
]

//Array of questions for user input
const questions = [
    {
        type: input,
        name: "title",
        question: "What is the title of your project?",
    },
    {
        type: input,
        name: "description",
        question: "Please enter a description of your project.",
    },
    {
        type: input,
        name: "installation",
        question: "What are the steps required to install your project?",
    },
    {
        type: input,
        name: "usage",
        question: "Provide instructions and examples for use."
    },
    {
        type: input,
        name: "license",
        question: "Which license will be assign for this project?",
        choices: licenses,
    },
    {
        type: "input",
        name: "contributors",
        message: "Who else contributed to the project?",
    }
    {
        type: "input",
        name: "tests",
        message: "Explain how to run test for your application",
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter your contact information for any questions.",
    }
];

//function that writes to README0.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,
    `
    # ${data.title}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contributions](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributions
    ${data.contributors}

    ## Tests
    ${data.tests}

    ## Questions
    If you have any questions, please contact: \n
    ${data.questions}
    `, 
    err => {if(err){console.error(err); return}} 
    )
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README0.md", data);
    });
}

init();