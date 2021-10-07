// `Engineer` will also have the following:
const Employee = require('./employee');
// * `github`&mdash;GitHub username
class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
}
// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`