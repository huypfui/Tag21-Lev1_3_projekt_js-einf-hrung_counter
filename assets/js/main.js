
let number = document.getElementById("number");

let counter = 0;
number.innerHTML = counter;

function calculate(calc){
    counter += calc;
    number.innerHTML = counter;
}

function timesTwo() {
    counter = counter * 2;
    number.innerHTML = counter;
}

function setZero() {
    counter = 0;
    number.innerHTML = counter;
}