// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

const inquirer = require ('inquirer')
const fs = require('fs')
const generateMarkdown = require ('./utils/generateMarkdown')

inquirer 
    .prompt([
        {
          type: "input",
          name: "projectTitle",
          message: "What is the title of the project?"
        },
        {
          type: "input",
          name: "description",
          message: "Write down any description for your project."
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of the project?"
          },
        
    ])
    .then(res => {
        console.log()
    })
    .catch(err => console.log(err))

    // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions