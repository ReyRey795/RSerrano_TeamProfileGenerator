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



inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What's the employee's role?",
        choices: ['Manager', 'Intern', 'Engineer'],
    },
])

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's the manager's office number?",
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern belong to?"
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: "gitHub",
        message: "What's the engineer's GitHub account?",
    }
];