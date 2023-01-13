// for loop statement executes until the specified condition becomes false.

// Program to print numbers until 10

// console.log("Counting number till 10:")
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//print a pattern
/*
1
22
333
4444
55555
666666
7777777
88888888
999999999
101010101010101010
*/
for (let i=1; i<=10; i++) {
    for(let j=i; j<=i; j++) {
        console.log(j);
    }   
}