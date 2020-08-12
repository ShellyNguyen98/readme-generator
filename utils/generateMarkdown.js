// function to generate markdown for README
function generateMarkdown(answers) {
  return ` 
  <h1> ${answers.projectTitle} </h1>
  ![badge](https://img.shields.io/badge/license-<${answers.license}>-blue.svg)<br/>

 ## Description
 ${answers.description}

 # Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#test)
 - [Questions](#question)

  ## Installation 
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-<${answers.license}>-blue.svg)<br/>
  This application is covered by the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions
  ${answers.question} <br/>
<br/>

Find me on Github: [${answers.username}](https://github.com/${answers.username}) <br />
<br />
Email me with any questions: ${answers.email}<br /><br />

`;
}

module.exports = generateMarkdown;
