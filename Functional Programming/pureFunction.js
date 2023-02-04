// Pure functions are those function which give the same result 
// as long as we give the specific input i.e for same input --> output same

function addTwoNums(a, b) {
    return a + b;
}

console.log(addTwoNums(5, 6));      // 11


// Another rule for a function to be considered pure is that it should not have side-effects. 
// A side-effect is any instance where a function makes a change outside of itself.
// For example- for Math.random() method, we get different values and we don't know.