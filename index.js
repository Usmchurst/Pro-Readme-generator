// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// const generatorMarkdown = require('./generateMarkdown.js');
const generateMarkdown = require('./generateMarkdown.js');
const writeFileAsync = util.promisify (fs.writeFile)

// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {  
  
return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your project called?',
      name: 'Title ',
    },

    {
        type: 'input',
        message: 'What is the project about?',
        name: 'Description',  
      },
      
      {
        type: 'input',
        message: 'Table of contents',
        name: 'Table of contents', 
      },
      
      {
        type: 'input',
        message: 'What is needed for the for the user to install this app?',
        name: 'Installation',
      },
      
      {
        type: 'input',
        message: 'How is this app used, what do you use it for?',
        name: 'Usage'
      },
      
      {
        type: 'list',
        message: 'What licesnse is being used',
        name: 'license',
        choices: ['MIT', 'Apache', 'Boost']
      },
      
      {
        type: 'input',
        message: 'Who contributed to this project',
        name: 'Contributing'
      },

      {
        type: 'input',
        message: 'What commands are needed to test this app',
        name: 'Tests'
      },

      {
        type: 'input',
        message: 'Contact information ',
        name: 'questions',
      },
      
      {
        type: 'input',
        message: 'What is your github Username?',
        name: 'Username'
      },
      
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'
      },
      
      

  ]);
};



// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app
const init = () => {
  promptUser()
  .then((answers) => writeFileAsync('README.md',generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to generateMarkdown'))
  .catch((err) => console.error(err));
}
// generatorMarkdown.generateMarkdown()

init();
