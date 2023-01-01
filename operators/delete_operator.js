// The delete operator removes a property from an object. 
// If the property's value is an object and there are no more references to the object

const Employee = {
    firstName: "Rohan",
    lastName: "Singh",
    lastName: "Sharma"
}

console.log(Employee, typeof Employee)
console.log(Employee.lastName)


delete Employee.firstName       // delete the property of Employee
console.log(Employee.lastName)
console.log(Employee)

