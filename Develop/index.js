// this line requires the file and creates it below it collects the markdown file info from the utils file
var fs = require("fs"); 
const generateReadMe = require('./utils/generateMarkdown')


const inquirer = require('inquirer');
// this section prompts the user for information on the terminal that is then used to generate the readme
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please add your title',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Please add your description',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Please write the Table of content',
      name:'TableOfContent',
    },
    {
        type: 'input',
        message: 'Please add installation info',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'Please add your usage info',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'Chose one from this list; A, B, C',  //find out the different types of licenses that can be used
        name: 'License',
      },
      {
        type: 'input',
        message: 'What is your contribution',
        name: 'Contribution',
      },
      {
        type: 'input',
        message: 'Please do test',
        name: 'Test',
      },
      {
        type: 'input',
        message: 'Enter your Github Username ',
        name: 'UserName',
      },
      {
        type: 'input',
        message: 'Enter your email ',
        name: 'Email',
    }]).then((response) =>{
    let Readmestring = generateReadMe(response)
    fs.writeFile('ReadMe.md', Readmestring ,  function (err) {
      if (err) throw err;
      console.log('Saved!');
    })
  });

  