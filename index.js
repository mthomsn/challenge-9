// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please give a brief description of your application:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'How do you install your application?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'How do you use your application?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'How do you test your application?',
    name: 'testInstruction',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'list',
    message: 'What license does your project have?',
    choices: ['MIT', 'Apache-2.0', 'MPL-2.0', ],
    name: 'license',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      // console.log(response)
      fs.writeFile("README.md", generateMarkdown(response), (err) =>
        err ? console.log(err) : console.log("Done")
      );
    })
}

// Function call to initialize app
init();
