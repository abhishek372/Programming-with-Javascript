// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.
// Function declaration are always hoisted but the function expression is not hoisted.

// function can be called even before the function declaration
console.log(square(5));

function square(num){
    return num*num;
}

// Note - Here, function is hoisted so behind the seen during execution function declaration move to top of the scope

// It does not work with the below function expression.

// const square = function(num) {          // Error
//     return num * num;
// }   