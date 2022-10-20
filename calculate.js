let displayValue = 0;
let 


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

const numb = document.querySelectorAll('.number');

numb.forEach((number) => {

    number.addEventListener("click", () => {
        number.style.backgroundColor = 'black';
    
});
});

// const sum = function(arr) {
// return arr.reduce((a,b) => a + b, 0);
// };

// const multiply = function(arr) {
//   return arr.reduce((a,b) => a * b, 1);
// };

