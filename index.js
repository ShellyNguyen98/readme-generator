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
            name: "installation",
            message: "Write down any installation needed for the project."
        },
        {
            type: "input",
            name: "Usage",
            message: "What is the project used for?"
        },
        {
            type: "input",
            name: "License",
            message: "What are the licenses?",
            choice: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            name: "Contributing",
            message: "Who are the contributors of the project?"
        },
        {
            type: "input",
            name: "Test",
            message: "Are there any tests?"
        },
        {
            type: "input",
            name: "Question",
            message: "Are there anny question?"
        },
  
    ])
    .then(res => {
        console.log()
    })
    .catch(err => console.log(err))
    
    
