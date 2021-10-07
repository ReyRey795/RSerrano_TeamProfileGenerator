// `Intern` will also have the following:
const Employee = require('./employee');

// * `school`
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
}

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`