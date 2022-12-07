// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  switch(License) {
    case "A":
       License ="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "B":
      License =  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
      case "C":
        License ="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    default:
      License = 'None';
  }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  switch(License) {
    case "A":
       License ="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "B":
      License =  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
      case "C":
        License ="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    default:
      License = 'None';}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  switch(License) {
    case "A":
       License ="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "B":
      License =  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
      case "C":
        License ="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    default:
      License = 'None';
}}

function generateReadMe(response){
  return `
  ## Title
  ${response.Title} <br />
  ![badge](https://img.shields.io/badge/license-${renderLicenseBadge(License)})<br />

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

![Walkthrough]()
Link to walkthrough:
## License
![badge](https://img.shields.io/badge/license-${response.License}-brightblue)<br />
This application is covered by the ${renderLicenseBadge(License)} license. 
## Contributors
${response.Contribution}
## Testing
${response.Test}
## Questions
If you have any further questions you can contact me on:<br />
  -GitHub: [${response.UserName}](https://github.com/${response.UserName})<br />
<br />
  -Email: ${response.Email}<br /><br />
  `
}


module.exports = generateReadMe;
