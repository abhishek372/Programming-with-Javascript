// Bitwise XOR (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 0 = 1
// 1 ^ 1 = 1

let a = 5;        // 0101
const b = 6;        // 0110
console.log(a^b);   // 0011 = 3

// Bitwise XOR assignment (^=) operator uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable.

a ^= 2;         // a = a^2   
console.log(a);