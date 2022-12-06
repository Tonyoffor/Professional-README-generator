// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (responsel.License = A){
  return`
  [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/${License}/OFL-1.1)
  `}
else if (response.License = B){
return `
[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/${License}/Artistic-2.0)
`}
else if (response.License = C){
  return`
  [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/${License}/Zlib)
  `
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function generateReadMe(response){
  return `
  ## Title
  ${response.Title} <br />
  ![badge](https://img.shields.io/badge/license-${response.License})<br />

  ## Description
  ${response.Description} <br />
  ## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
${response.Installation}
## Usage
${response.Usage}
## License
![badge](https://img.shields.io/badge/license-${response.License}-brightblue)
<br />
This application is covered by the ${response.License} license. 
## Contributors
${response.Contribution}
## Testing
${response.Test}
## Questions
For any further questions you can contact me on:<br />
  -GitHub: [${response.UserName}](https://github.com/${response.UserName})<br />
<br />
  -Email: ${response.Email}<br /><br />
  `
}


module.exports = generateReadMe;
