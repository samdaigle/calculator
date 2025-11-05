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

function operate(operator, firstNum, secondNum) {
    return operator(firstNum, secondNum);
};


const nums = document.querySelectorAll("#numbers > button");
const operators = document.querySelectorAll("#operators > button");

nums.forEach(num => {
    num.addEventListener("click", () => {
        if (!firstNum) {
            firstNum = parseInt(num.textContent);
            console.log(firstNum);
        } else if (!secondNum) {
            secondNum = parseInt(num.textContent);
            console.log(secondNum);
        } else if (operator) {
            operate(operator, firstNum, secondNum);
        } else {
            console.log("test")
        }

    })
});


