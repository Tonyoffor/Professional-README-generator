// TODO: Include packages needed for this application

var fs = require("fs");

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file



// TODO: Create a function to initialize app


// Function call to initialize app



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
      },
  ])
  .then((response) =>
   // var fs = require('fs');

    fs.writeFile('ReadMe.md', response['Title']+ "\n" +response['Description']+ "\n" +response['Description'] +'\n' 
    +"Questions"+'\n'+"Username "+response['UserName'] +'\n'+"Email "+response['Email'],  function (err) {
      if (err) throw err;
      console.log('Saved!');
    })
  );

  