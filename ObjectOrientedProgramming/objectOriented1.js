
const person = {
    shoes: 100,
    stateTax: 20,
    totalPrice: function() {
        var calculation =  person.shoes * person.stateTax;
        return calculation;
    }
}

person.totalPrice;