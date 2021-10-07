//  team manager’s name, employee ID, email address, and office number

const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email) 
        this.officeNumber = officeNumber;
    }
}