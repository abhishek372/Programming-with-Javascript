// BigInt is a built-in object which represents numbers more than 2^53 - 1
// BigInt function can be used to create BigInt objects

// Append n to the number gives the bigInt type
let bigInt = 555555n;
console.log(typeof(bigInt));

let number = BigInt(6000);
console.log(number);

let x = BigInt(Number.MAX_SAFE_INTEGER)
// x = x+1;                 // Cannot convert BigInt to number
console.log(x);

// BigInt is not strictly equal to Number but loosely equals
// console.log(typeof BigInt === bigInt)
// console.log(BigInt(5555) == 5555n)
// console.log(1n===1, 1n==1)
// console.log(1n>=1)
// console.log(2n>1)
// console.log(2<1n)


let count = 0n;
if(count) {
    console.log(true);
}
else{
    console.log(false);
}

