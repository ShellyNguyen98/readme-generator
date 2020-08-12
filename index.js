const inquirer = require ('inquirer')
const fs = require('fs')
const generateMarkdown = require ('./utils/generateMarkdown')

// array of questions for user
const questions = [
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
          name: "usage",
          message: "What is the project used for?"
      },
      {
          type: "list",
          name: "license",
          message: "What are the licenses for the project?",
          choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
          type: "input",
          name: "contributing",
          message: "Who are the contributors of the project?"
      },
      {
          type: "input",
          name: "test",
          message: "Are there any tests?"
      },
      {
          type: "input",
          name: "userName",
          message: "What is your Github username?"
      },
      {
          type: "input",
          name: "email",
          message: "What is your email?"
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err) {console.log(err)}
        console.log('Created readme.file')
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)

    .then(answers => {
        
        let onit = generateMarkdown(answers)
        writeToFile('./utils/Readme.md', onit)
        
    })
    .catch(err => console.log(err))
}
// function call to initialize program
init();
