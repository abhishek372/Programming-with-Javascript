let arr = [1, 2, 3, 4, 5, 6];

// Access the array elements using loop
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// Print array elements using function call
function listArrayItems(arr){
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i]);
        console.log(i, arr[i]);
    }    
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);             //function call
