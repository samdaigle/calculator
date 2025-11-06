function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } 
};

let firstNumber;
let secondNumber;
let displayNumber;
let solution = 0;
let operator;
const operatorList = {"+": add, "-": subtract, "*": multiply, "/": divide};



function operate(operator, a, b) {
    return operator(a, b);
};


const display = document.querySelector("#display");
const digits = document.querySelectorAll("#numbers > button");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");


function updateDisplay(newDisplay) {
    display.textContent = newDisplay;
};


function clear() {
    firstNumber = 0;
    secondNumber = 0;
    displayNumber = 0;
    solution = 0;
    operator = 0; 
    updateDisplay(0);
};

clearBtn.addEventListener("click", clear());

function updateDisplayNumber(digit) {
    if (!displayNumber) {
        displayNumber = digit;
    } else {
        displayNumber += digit;
    }
}




