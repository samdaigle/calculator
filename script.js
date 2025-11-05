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

let firstNum;
let operator;
let secondNum;
let content;


function operate(operator, firstNum, secondNum) {
    return operator(firstNum, secondNum);
};

const display = document.querySelector("#display");

const nums = document.querySelectorAll("#numbers > button");
const operators = document.querySelectorAll("#operators > button");

function updateDisplay(newContent) {

    if (!content) {
        content = newContent;   
    } else {
        content += ` ${newContent}`
    }
    display.textContent = content;
};

nums.forEach(num => {
    num.addEventListener("click", () => {
        if (!firstNum) {
            firstNum = parseInt(num.textContent);
            updateDisplay(firstNum);
        } else if (!secondNum) {
            secondNum = parseInt(num.textContent);
            updateDisplay(secondNum);
        } else {
            console.log("test")
        }
    })
});




