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
            message: "What is the title of the project?"
        },
  
    ])
    .then(res => {
        console.log()
    })
    .catch(err => console.log(err))
    
    
	fs.writeFile('README.md', `${projectTitle}`, (err) => {
	if (err) {console.log(err)}
    console.log('Title Name created!')
    })
