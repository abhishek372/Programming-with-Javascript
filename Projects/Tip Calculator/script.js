// Tip calculator script

let cost = document.querySelector('.cost-input');
let tipPercent = document.querySelector('.tip-percent-input');
let result = document.querySelector('.total-tip');
const btn = document.querySelector('.calculate-btn');

const mainInnerContainer = document.querySelector('#main-inner-container');

// Take user input using prompt
cost.value = prompt('Entey food cost: ');
tipPercent.value = prompt('Enter the tip percent: ');

// Calculate the cost on button click
btn.addEventListener('click', () => {

    let span = document.createElement('span');

    if(cost.value==0 || cost.value==null){
        alert('Please fill the valid food cost input!!');
    }
    else if (tipPercent.value==0 || tipPercent.value==null){  
        alert('Please give some tip.');
    }
    else{
        let tipAmount = parseFloat(tipPercent.value/100);
        result.innerHTML = (cost.value * tipAmount).toFixed(2);
    }
})





        // span.textContent = 'Please give some tip';
        // tip.after(span);
        // span.textContent = 'Please fill the cost input';
        // cost.after(span);