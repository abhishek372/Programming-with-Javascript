// Tip calculator script

const cost = document.querySelector('.cost-input');
const tip = document.querySelector('.tip-cost-input');
const result = document.querySelector('.total-tip');
const btn = document.querySelector('.calculate-btn');

const mainInnerContainer = document.querySelector('#main-inner-container');

// Calculate the cost on button click
btn.addEventListener('click', () => {

    let span = document.createElement('span');

    if(cost.value==0 || cost.value==null){
        alert('Please fill the cost input!!');
        // span.textContent = 'Please fill the cost input';
        // cost.after(span);
    }
    else if (tip.value==0 || tip.value==null){  
        alert('Please give some tip.');
        // span.textContent = 'Please give some tip';
        // tip.after(span);
    }
    else{
        let tipPercent = parseFloat(tip.value/100);
        result.innerHTML = cost.value * tipPercent;
    }
})
