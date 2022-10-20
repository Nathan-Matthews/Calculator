// Initial values
let displayValue = 0;
let operator = '';


const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b){
    return a * b;
};

const divide = function(a,b) {
    if(b == 0){
        return 0;
    }
    return a / b;
};

const operate = function(a,op,b) {
    if(op == '+'){
        return add(a,b);
    }

    else if(op == '-'){
        return subtract(a,b);
    }

    else if(op == 'x'){
        return multiply(a,b);
    }
    else if(op == '/'){
        return divide(a,b);
    }
    else{
        return "ERROR: We couldn't determine what operator you input."
    }

}

const values = document.querySelector('.values');

const clear = document.querySelector('.clear');

clear.addEventListener("click",() => {
    //clear the text content and reset variables on clear
    displayValue = 0;
    operator = '';
    values.textContent = displayValue;
});

// Event listener for number clicks
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {

    number.addEventListener("click", () => {
        if(operator != ''){
            displayValue = operate(displayValue, operator, number.textContent.charAt(0));
        }
        else{
            displayValue = number.textContent.charAt(0);
        }
        
        values.textContent = displayValue;
        
    
});
});

// Event listener for operator clicks
const ops = document.querySelectorAll('.op');
ops.forEach((op) => {

    op.addEventListener("click", () => {
        operator = (op.textContent.charAt(0));
    
});
});
