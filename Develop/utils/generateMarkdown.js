// This code generates the license badge
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

  
// This function creates the link to the function
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

// This function generates the body of the Readme 
function generateReadMe(response){
  return `
  ## Title 
  ${response.Title} <br />
  ![badge](https://img.shields.io/badge/license-${renderLicenseBadge(response.License)})<br />

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

![Walkthrough](https://watch.screencastify.com/v/BQAdDimptIiDU33ouUov)<br />

## License
![badge](https://img.shields.io/badge/license-${response.License}-brightblue)<br />
This application is covered by the ${renderLicenseBadge(response.License)} license. 
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

// This line exports the data to the index.js page
module.exports = generateReadMe;
