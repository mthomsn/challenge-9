// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Please give a brief description of your application:',
    name: 'projectDescription',
  },
  {
    type: 'input',
    message: 'How do you install your application?',
    name: 'projectInstall',
  },
  {
    type: 'input',
    message: 'How do you use your application?',
    name: 'projectUsage',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'projectContribution',
  },
  {
    type: 'input',
    message: 'How do you test your application?',
    name: 'projectTestIns',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'projectGitHub',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'projectEmail',
  },
  {
    type: 'list',
    message: 'What license does your project have?',
    choices: ['MIT', 'Apache-2.0', 'GNU General Public License (GPL)', 'Berkeley Software Distribution License (BSD)', 'Internet Systems Consortium License (ISC)'],
    name: 'projectLicense',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log('working');
}

// Function call to initialize app
init();
