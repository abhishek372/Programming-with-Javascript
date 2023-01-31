// We can extend the size of arrays with push method

const simpleArray = [2, 5, 6, 7, 10];
simpleArray.push(22);
simpleArray.push(33);
simpleArray.push(44);
simpleArray.push(55);

console.log(simpleArray);



function arrayBuilder(one, two, three){
    let arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder('apple', 'orange', 'pear');
arrayBuilder('apple', 'orange', 'pear', 'banana');