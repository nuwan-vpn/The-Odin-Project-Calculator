let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector("#btn-clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let operators = document.querySelectorAll(".operator");
    let numbers = document.querySelectorAll(".numbers");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => {
        number.addEventListener("click",function(e){
            handleNumber(e.target.textContent)
            currentScreen.textContent = currentValue;
        });
    });

    operators.forEach((op) => {
        op.addEventListener("click", function(e){
            handleOperators(e.target.textContent)
            previousScreen.textContent = previousValue + " " + operator;
            currentScreen.textContent = currentValue;
        });
    });

    clear.addEventListener("click", function(){
        currentValue = '';
        previousValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    });

    equal.addEventListener("click", function(){
        calculate();
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    });

});

function handleNumber(number){
    if(currentValue.length <=5){
        currentValue += number;
    } else{
        alert("You are not allowed to enter more than 6 digits.");
    }   
}

function handleOperators(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if (operator === "-"){
        previousValue -= currentValue;
    } else if (operator === "x"){
        previousValue *= currentValue;
    } else if (operator === "/"){
        previousValue /= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}