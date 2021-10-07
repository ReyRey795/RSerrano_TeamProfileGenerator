//Create variables for all classes.

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Employee = require('./lib/employee');

//node module packages needed
const inquirer = require('inquirer');
const fs = require('fs');

// Create questions to be asked for the name, id, 
// email, role, then each role has it's additional 
// question.


const questions = 