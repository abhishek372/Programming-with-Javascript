// Sorting method in array does sort the elements by converting it to strings

const arrayStrings = ['Hello', 'Banana', 'Orange', 'Red'];
arrayStrings.sort();
console.log(arrayStrings);



// If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
// If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
// If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.


let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers);

const arrayNumbers = [10, 2, 9, 4, 6];
arrayNumbers.sort( (a,b) => {
    return a-b;
});    
console.log(arrayNumbers);