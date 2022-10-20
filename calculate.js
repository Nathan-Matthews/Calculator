// Initial values
let firstValue = 0;
let secondValue = 0;
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

// Clear the display and variables on 'clear'
clear.addEventListener("click",() => {
    firstValue = 0;
    secondValue = 0;
    operator = '';
    values.textContent = 0;
});

// Event listener for number clicks
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener("click", () => {

        values.textContent += number.textContent
        // if(operator != ''){
        //     firstValue = operate(firstValue, operator, number.textContent.charAt(0));
        //     operator = '';
        // }
        // else{
        //     firstValue = number.textContent.charAt(0);
        // }
        // values.textContent = firstValue;    
});
});

// Event listener for operator clicks
const ops = document.querySelectorAll('.op');
ops.forEach((op) => {

    op.addEventListener("click", () => {
        firstValue = values.textContent;
        operator = (op.textContent.charAt(0));
    
});
});
