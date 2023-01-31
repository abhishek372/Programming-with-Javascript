// Function can be defined under certain conditions

let num=5;

var dateOfBirth = {
    year: 2005,
    month: 10,
    date: 15
}

// Based on the number value condition, we function is created and called inside
if(num>2){
    let myFunc = function(object) {
        object.date = 25;
        return object.date;
    }
    console.log(myFunc(dateOfBirth));   
}




