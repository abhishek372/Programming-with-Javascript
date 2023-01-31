// Array is a special variable, which is used to store multiple items with different types.
// it can be  created using array literal.
// var array[size] = [1, 2, 3, 'Hello'];
// Array type is object by default.


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

// Const has block scope so, array declaraed in a block is not same as array declaraed outside of block scope

const nums = [12, 23, 34, 55];
{
    const numbs = [23, 4, 5, 8, 19];
    console.log(numbs);
}
// console.log(numbs);             // Error as array is block scroped
console.log(nums);              // Array nums is block scrope
