// Multiplication table of 1 to 10

for(var i=1; i<=10; i++){
    for(var j=1; j<=10; j++){
        console.log(`${i} X ${j} =`, i*j );
    }
}

// Divison table

for(var i=100; i>0; i=i-10){
    for(var j = 10; j>0; j=j-5){
        console.log(`${i} / ${j} =`, i/j);
    }
}