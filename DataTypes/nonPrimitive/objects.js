// Object is a non-primitive data type which contains key-value pairs called as properties of object.

// We can create objects in many ways as
// using object literal notation
// using new keyword
// Using object.create()

let a = Object()            // Creates an empty object
console.log(typeof a, a);

// Using object literal notation
let person = {
    firstName : "Ajay",
    age : "21",
    height: "5.4 inch",
}

console.log(person, typeof(person));
console.log(person.firstName, person.height);           // Accessing objects properties 

// Using new keyword
let vehicle = new Object();
vehicle.name = "TATA Nexon EVs";
vehicle.year = "2019";
vehicle.color = "blue-black";
vehicle.sunroof = true;

console.log(vehicle);


// Objects are mutable in nature and are addresed by reference not by values.
const personDetails = {
    firstName:"John",
    lastName:"Doe",
    age:50, 
    eyeColor:"blue"
}
  
const x = personDetails;
x.age = 10;                 // it will also change personDetail property age value
console.log(x, personDetails);