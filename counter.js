const Button = document.getElementById("myBtn");
const number = document.getElementById("number");
const Button2 = document.getElementById("myBtn2");
const Button3 = document.getElementById("myBtn3");


let counter = Number(localStorage.getItem("counter")) || 0;
number.innerText = counter;

Button.addEventListener("click", decrease);
Button2.addEventListener("click", increase);
Button3.addEventListener("click", reset);


function update() {
    number.innerText = counter;
    localStorage.setItem("counter", counter);
}

function decrease() {
    if (counter > 0) {
        counter--;
        update();
    }
}

function increase() {
    counter++;
    update();
}

function reset() {
    counter = 0;
    update();
}