// TODO: Include packages needed for this application
var http = require('http');
var fs = require("fs");
const sections = [];
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (err) {
        console.error(err);
      }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');

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
      message: 'Please add your Table of Content',
      name: 'Table of Content',
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
        message: 'Please add license info',
        name: 'License',
      },
      {
        type: 'input',
        message: 'Re-enter password to confirm:',
        name: 'Contribution',
      },
      {
        type: 'input',
        message: 'Please do test',
        name: 'Test',
      },
      {
        type: 'input',
        message: 'Enter your Github and email info here',
        name: 'Questions',
      },
  ])
  .then((response) =>
    console.log(response)
  
  );

  