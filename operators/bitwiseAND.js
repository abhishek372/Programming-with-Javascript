//  Bitwise AND (&) - converts both the operands to its binary representation and then perform AND operation
// 0 & 0 = 0
// 0 & 1 = 0
// 1 & 0 = 0
// 1 & 1 = 1

const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001

// Bitwise AND assigment (&=) - uses the binary value of both operands and does a bitwise AND operation on them and assigns the result to the variable. 

let c = 5;
c &= 2;             // c = c & 2
console.log(c)