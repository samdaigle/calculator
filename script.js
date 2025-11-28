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
    updateDisplay("");
}

function equals() {
    secondNumber = +displayNumber;
    solution = operate(currentOperator, firstNumber, secondNumber);
    displayNumber = solution;
    updateDisplay(displayNumber);
}

function checkMultipleOperations() {
      if (firstNumber) {
        equals();
        firstNumber = solution;
        displayNumber = 0;
    } else{
        firstNumber = +displayNumber;
        displayNumber = 0;  
    }
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
    equals()
})

addBtn.addEventListener("click", () => {
    
    checkMultipleOperations()
    currentOperator = add;
})

subtractBtn.addEventListener("click", () => {
    checkMultipleOperations();
    currentOperator = subtract;
})

divideBtn.addEventListener("click", () => {
    checkMultipleOperations();
    currentOperator = divide;
    
})

multiplyBtn.addEventListener("click", () => {
    checkMultipleOperations();
    currentOperator = multiply;
})


