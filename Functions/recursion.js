// Function that refer to and call itself is called recursion.
// But, the base condition must be there, so that the function executes completely at some point
// or it will throw a runtime error

function loop(x){

    // exit condition or base condition
    if(x == 10){
        return 0;
    }
    return x + loop(x+1);  // recursive call
}

// console.log(loop(0));


function foo(i){

    if(i === 0){
        return 0
    }
    console.log(`begin: ${i}`);
    foo(i-1);
    console.log(`end: ${i}`);
}

foo(3);
