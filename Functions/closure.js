// In javascript, we can nest function withing a function.
// It also forms a closure. A closure is an expression that can have 
// free variables together with an environment that binds those variables.

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
}
const a = addSquares(2, 3); // returns 13
const b = addSquares(3, 4); // returns 25
const c = addSquares(4, 5); // returns 41
  
console.log(a, b, c);