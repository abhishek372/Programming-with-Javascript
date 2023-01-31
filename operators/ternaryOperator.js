// Ternary operator is basically shorthand for if-else condition 
// Syntax- result = conditon ? if-statement : else-statement

let maxNum = 5>2 ? 5 : 2;
console.log(maxNum);

let nums = [12, 34, 2, 6, 44];

function greaterNumer(nums){
    max = nums[0];
    for(let i = 0; i<nums.length; i++) {
        max = nums[i]>max ? nums[i] : max;
    }
    return max;
}

console.log(greaterNumer(nums));