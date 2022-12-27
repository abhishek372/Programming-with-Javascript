// Ternary operator is the only JavaScript operator that takes three operands.
// (condition ? expIfTrue : expIfFalse)

function getFee(isMember) {
    return (isMember ? '$20' : '$50');
}

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));

const age = 19;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage)



