// Initial values
let firstValue = '';
let secondValue = '';
let operator = '';

// Operation functions
function add(a,b) {
	return +a + +b;
};

function subtract(a,b) {
	return +a - +b;
};

function multiply(a,b){
    return +a * +b;
};

function divide(a,b) {
    if(b == '0'){
        return 'How dare you?';
    }
    return +a / +b;
};

function operate(a,op,b) {
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

function updateDisplay(input){
    values.textContent = input;
}

// Document event selectors for event listeners.
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const values = document.querySelector('.values');
const clear = document.querySelector('.clear');
const ops = document.querySelectorAll('.op');
const back = document.querySelector('.backspace');

// Event listener for backspace
back.addEventListener("click",() => {

    if(operator == ''){
        firstValue = firstValue.substring(0, firstValue.length - 1);
        updateDisplay(firstValue);
    }

    else{
        secondValue = secondValue.substring(0, secondValue.length - 1);
        updateDisplay(secondValue);
    }
});


// Clear the display and variables on 'clear'
clear.addEventListener("click",() => {
    firstValue = '';
    secondValue = '';
    operator = '';
    updateDisplay('');
});

// Event listener for equals sign
equals.addEventListener("click",() => {
    // If equals is pressed before an operator, ignore it.
    if(operator == ''  || secondValue == ''){
        return;
    }
    firstValue = operate(firstValue, operator, secondValue);
    updateDisplay(firstValue);
    // Reset the operator, if a user clicks equals
    firstValue = '';
    secondValue = '';
    operator = '';

});

// Event listener for number clicks

numbers.forEach((number) => {
    number.addEventListener("click", () => {

        // If a number is clicked and there is an operator value, we must be entering a second Value.
        if(operator != ''){
            secondValue += number.textContent;
            updateDisplay(secondValue);
        }
        else{
            firstValue += number.textContent;
            updateDisplay(firstValue);
        }   
});
});

// Event listener for operator clicks
// Updates 'operator' variable to the most recently clicked operator.
ops.forEach((op) => {

    // if second value is not empty and an operator was clicked, add value one and two to valueOne
    op.addEventListener("click", () => {
        // Check if a second operation is being performed without clicking equals
        if (operator != '' && secondValue != ''){
            firstValue = operate(firstValue, operator, secondValue);
            updateDisplay(firstValue);
            // Perform an operation the same as equals but update with the new op.
            secondValue = '';
            operator = (op.textContent.charAt(0));
        }
        if (firstValue == ''){
            firstValue = values.textContent;
        }
        operator = (op.textContent.charAt(0));
    
});
});
