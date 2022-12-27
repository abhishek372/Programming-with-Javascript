// Bitwise NOT (~) -  inverts the bits of its operand. 
// ~0 = 1
// ~1 = 0

const a = 5;        // 00000000000000000000000000000101
console.log(~a);

// Convert positive number to negative number by getting 2's complement of that number
// 5 = 1001
// 1's complement of (5) = 1001 + 1 = 1001
// 2's complement of 1001 = 0110 = -6

// Similarly for the negative number.
let b = -10;        
console.log(~b);
