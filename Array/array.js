// Array is a special variable, which is used to store multiple items with different types.
// It can be  created using array literal and uses numbered index.
// Syntax - var array[size] = [1, 2, 3, 'Hello'];
// Type - object by default. 

// Array elements can be any primitive values, functions, objects and even array.

let arr = [1, 3, 4, 6];
console.log(arr, typeof(arr));

arr[0] = 5;
console.log(arr);


// Array with const keqyword does not define constant array but 
// it defines constant reference to the array.

// Constant declarations must be initialized
const ar = [2,4,5,6];
ar[0] = 10;
console.log(ar);

// Const has block scope so, array declared in a block is not same as array declaraed outside of block scope

const nums = [12, 23, 34, 55];
{
    const numbs = [23, 4, 5, 8, 19];
    console.log(numbs);
}
// console.log(numbs);             // Error as array is block scroped
console.log(nums);                // Array nums is block scrope


// We can also create a new Array using new kewyword
let newArray = new Array("Saab", "Volvo", "BMW");
let i = 0;
while(i<newArray.length){
    console.log(newArray[i]);
    i++;
}

// Main features of array is their built-in properties and methods associated with them.
