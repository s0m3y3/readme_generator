const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = [
    "MIT", 
    "Apache License 2.0", 
    "GNU General Public License (GPL) v3", 
    "GNU Lesser General Public License (LGPL) v3", 
    "BSD 2-Clause License (Simplified BSD License)", 
    "Mozilla Public License 2.0", 
    "Boost Software License 1.0",
    "Unlicense", 
]

//Array of questions for user input
const questions = [
    {
        type:"input",
        name:"user",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "Which license will be assign for this project?",
        choices: licenses,
    },
    {
        type: "input",
        name: "contributors",
        message: "Who else contributed to the project?",
    },
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
    fs.writeFile(fileName,data,err => {if(err){console.error(err); return}})
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README0.md", generateMarkdown(data));
    });
}

init();