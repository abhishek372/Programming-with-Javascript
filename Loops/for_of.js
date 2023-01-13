// for..of loop iterates over the values of many types of iterables like array, Set and Maps.

// Array Object using object notation
const array = new Array();
array[0] = '2';
array[1] = '3';
array[2] = '4';

// prints the arrays values
for(let values of array) {
    console.log(values);
}


// Map using object notation
const m = new Map();
m.set(1, 'red');
m.set(2,'blue');
m.set(3,'green');

for (let value of m){
    console.log(value);
}
console.log(m)


// Set using object notation
const s = new Set();
s.add(2);
s.add(1);
s.add(3);

for (let value of s) {
    console.log(value);
}
console.log(s);
