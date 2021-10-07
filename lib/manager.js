//  team manager’s name, employee ID, email address, and office number

const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email) 
        this.officeNumber = officeNumber;
    }

    // `getRole()`&mdash;overridden to return `'Manager'`
    getRole(){
        return 'Manager'
    }
    // Should create a method for office number. Refer to employee styling.
    getOfficeNumber(){
        return this.officeNumber;
    }
}

// Manager is not used, create module exports
module.exports = Manager;