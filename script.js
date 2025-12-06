let firstNumber;
let secondNumber;
let displayNumber;
let solution;
let previousSolution;
let currentOperator;
let storeSecond = false;
let tryToSolve = false;

const display = document.querySelector("#display");
const digits = document.querySelectorAll("#numbers > button");
const addBtn = document.querySelector("#addition");
const subtractBtn = document.querySelector("#subtract");
const divideBtn = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");


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

clearBtn.addEventListener("click", () => {
    clear()
})

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
        if (storeSecond) {
            secondNumber = +displayNumber;
        } else {
            firstNumber = +displayNumber;
        }
        console.log(firstNumber, secondNumber);
    })
})


equalsBtn.addEventListener("click", () => {
   
    if (currentOperator) {

        solution = operate(currentOperator, firstNumber, secondNumber);
        displayNumber = solution;
        firstNumber = solution;
        updateDisplay(displayNumber);
        storeSecond = false;
        tryToSolve = false;
    } 
    displayNumber = 0;
    
})


function checkForSolution() {
    
    if (tryToSolve) {
       
        solution = operate(currentOperator, firstNumber, secondNumber);
        displayNumber = solution;
        firstNumber = solution;
        updateDisplay(displayNumber);
        displayNumber = 0;
    } 
}

addBtn.addEventListener("click", () => {
   
    storeSecond = true;
    displayNumber = 0;
    checkForSolution();
    currentOperator = add;
    tryToSolve = true;
})

subtractBtn.addEventListener("click", () => {

    storeSecond = true;
    displayNumber = 0;
    checkForSolution();
    currentOperator = subtract;
    tryToSolve = true;
})

divideBtn.addEventListener("click", () => {
    storeSecond = true;
    displayNumber = 0;
    checkForSolution();
    currentOperator = divide;
    tryToSolve = true;
    
})

multiplyBtn.addEventListener("click", () => {
    storeSecond = true;
    displayNumber = 0;
    checkForSolution();
    currentOperator = multiply;
    tryToSolve = true;
})


