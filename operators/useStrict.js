// "use-strict" is a literal expression used in ECMAScript 2015
// It is used only at the beginning of program or the function 
// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

"use strict"
a = 50;
console.log(a);       // Error - without declaring, cannot be used

myName();

function myName() {
    // "use strict"
    console.log(name);
    let name =  "Rohit";
}
