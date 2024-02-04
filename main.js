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

    numbers.forEach((number)=>addEventListener("click",function(e){
        handleNumber(e.target.textContent)
    }));
});

function handleNumber(number){
    console.log(number)
}