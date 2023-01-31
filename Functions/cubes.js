// Here, function receives the function defined as an function expression and 
// return an new Array with the cubes of numbers of given array

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
}
  
const f = function(x) {
    return x * x * x;
}
  
const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log(cube);
  