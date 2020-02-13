const prompt = require('inquirer').createPromptModule();
const axios = require('axios');
const fs = require('fs');

prompt([
  {
    type:'input',
    name:'username',
    message:"What's your Github's username?"
  },
  {
    type:'input',
    
  }
  {
    type:'input',
    name:'location'
    message:"What's id your address?"
  }
])