// Functions are like first class citizens i.e we can treat function as the value of other types
// We can pass functions to other functions as arguments, return them from other functions as values, 
// and store them in variables.

function add(a,b){
    return a+b;
}

let sum = add;              // here, we don't execute the function but reference to the function
// console.log(sum(2,3));      // here, we call the add function via the sum variable


function average(a,b,fn){
    return fn(a,b) / 2;
}

let result = average(10,20);
console.log(result);

