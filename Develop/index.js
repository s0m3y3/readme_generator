// TODO: Include packages needed for this application
//Installed "npm install inquirer"
const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: input,
        name: "title",
        question: "What is the title of your project?",
    }
    {
        type: input,
        name: "description",
        question: "Please enter a description of your project.",
    }
    {
        type: input,
        name: "license",
        question: "Which license will be assign for this project?",
        //MIT License, Apache License 2.0, GNU General Public License (GPL) v3, GNU Lesser General Public License (LGPL) v3, BSD 2-Clause License (Simplified BSD License), BSD 3-Clause License (Modified BSD License), Mozilla Public License 2.0, Creative Commons CC0, Unlicense, Eclipse Public License 2.0
    }
    {
        type: "input",
        name: "contributors",
        message: "Who else contributed to the project?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
