// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `![license](https://img.shields.io/badge/License-${license}-f39f37)` 
  : ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `[${license}](https://choosealicense.com/licenses/${license})` : ``;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? 
  `## License
  [${license}](https://choosealicense.com/licenses/${license})`
  : ``;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - ${renderLicenseLink(data.license)}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testInstruction}

  ${renderLicenseSection(data.license)}

  ## Questions
  GitHub: ${data.username}
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;