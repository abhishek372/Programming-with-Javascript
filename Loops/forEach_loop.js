//  for Each calls the callback function once for each elements of array

let numbers = [1, 2, 3, 4, 5, 6];

// Here, displaItems is a callback function
numbers.forEach(displayitems)


//  (item, index, numbers) is a callback function which accepts three arguments
function displayitems(item, index, numbers) {
    console.log(item, index, numbers)
} 

// above function can also be written as an arrow function or anonymous function 
numbers.forEach((item, index, numbers) => {
    console.log("arr[" + index + "]" + "=" + item);
})





