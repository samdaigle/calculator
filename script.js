let firstNumber;
let secondNumber;
let displayNumber;
let solution;
let currentOperator;


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

function operate(operator, a, b = 0) {
    if (!b) {
        return a;
    } else {
        return operator(a, b);
    }
}

function clear() {
    firstNumber = 0;
    secondNumber = 0;
    displayNumber = 0;
    solution = 0;
    operator = 0; 
    updateDisplay(0);
}



const display = document.querySelector("#display");
const digits = document.querySelectorAll("#numbers > button");
const addBtn = document.querySelector("#addition");
const subtractBtn = document.querySelector("#subtract");
const divideBtn = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");


function updateDisplay(newDisplay) {
    display.textContent = newDisplay;
};


digits.forEach(digit => {
    digit.addEventListener("click", () => {
        newDigit = digit.textContent;
        if (!displayNumber) {
            displayNumber = newDigit;
        } else {
            displayNumber += newDigit;
        }
        updateDisplay(displayNumber);
    })
})

clearBtn.addEventListener("click", () => {
    clear()
})

equalsBtn.addEventListener("click", () => {
    secondNumber = +displayNumber;
    solution = operate(currentOperator, firstNumber, secondNumber);
    displayNumber = solution;
    updateDisplay(displayNumber);
})

addBtn.addEventListener("click", () => {
    firstNumber = +displayNumber;
    currentOperator = add;
    displayNumber = 0;
})

subtractBtn.addEventListener("click", () => {
    firstNumber = +displayNumber;
    currentOperator = subtract;
    displayNumber = 0;
})

divideBtn.addEventListener("click", () => {
    firstNumber = +displayNumber;
    currentOperator = divide;
    displayNumber = 0;
})

multiplyBtn.addEventListener("click", () => {
    firstNumber = +displayNumber;
    currentOperator = multiply;
    displayNumber = 0;
})


