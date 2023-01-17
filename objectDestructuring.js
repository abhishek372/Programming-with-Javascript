// ES6 provides a new way to assign properties of the object which is called object destructuring

// let fName = 'Raj';
// let lName = 'Singh'

let person = {
    firstName: 'Rohan',
    lastName: 'Singh'
}

let { firstName, lastName} = person;

console.log(firstName);
console.log(lastName);