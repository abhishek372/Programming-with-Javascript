// In functional programming we use lots of functions and variable to perform some computation
// And we keep data and functionality separate and pass data into functions only when we want something computed.

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total)


// mph and h are only available in this function and cannot be accessed outside
function getDistance(mph, h) {
    return mph * h
}

var mph = 60;
var hrs = 2;
var distance = getDistance(mph, hrs);

console.log(distance);    // we cannot access the distance variable inside our function