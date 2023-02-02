// Using function as first class citizens convert one unit to different

function cmToIn(length){
    return length / 2.54;
}

function inToCm(length){
    return length * 2.54;
}

function convert(fn, length){
    return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(inches);

let centimeter = convert(inToCm, 10);
console.log(centimeter);