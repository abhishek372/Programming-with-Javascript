// 

let a = 10;
let b = 20;
let c = b;          // both variable point to same memory location and have same value

console.log(a, b, c);
console.log(b == c);
console.log(b === c);


// In case of array,

let d = [1, 2, 3];
let e = [1, 2, 3];

// In case of array, the reference to the array is passed to the new object
d.push(4);
console.log(d === e);
