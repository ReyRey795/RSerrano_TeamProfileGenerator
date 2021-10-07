// `Intern` will also have the following:
const Employee = require('./employee');

// * `school`
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    // * `getSchool()`
    getSchool(){
        return this.school
    }
    // * `getRole()`&mdash;overridden to return `'Intern'`
    getRole(){
        return 'Intern'
    }
}

// Intern is not used, create module exports
module.exports = Intern;