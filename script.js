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
    return a / b;
};

let currentNumber = 0;
let previousNumber = 0;
let solution = 0;
let operator;
let content;


function operate(operator, firstNum, secondNum) {
    return operator(firstNum, secondNum);
};

const display = document.querySelector("#display");
const digits = document.querySelectorAll("#numbers > button");
const operators = document.querySelectorAll("#operators > button");

function updateDisplay(newContent) {

    content = newContent;
    display.textContent = content;
};

function clear() {
    currentNumber = 0;
    previousNumber = 0;
    solution = 0;
    updateDisplay(0);
};

function getCurrentNumber(digit) {
    if (!currentNumber) {
        currentNumber = digit;
    } else {
        currentNumber += digit;
    }
}

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        getCurrentNumber(digit.textContent);
        updateDisplay(currentNumber);
    })
});

operators.forEach(item => {
    item.addEventListener("click", () => {
        let userSelection = item.textContent;
        if (userSelection == "+") {
            operator = add;
        } else if (userSelection == "-") {
            operator = subtract;
        } else if (userSelection == "/") {
            operator = divide;
        } else if (userSelection == "*") {
            operator = multiply
        } else if (userSelection == "=") {
            solution = operate(operator, currentNumber, previousNumber);
        } else if (userSelection == "clear") {
            clear();
        }
    })
})



updateDisplay(currentNumber);



