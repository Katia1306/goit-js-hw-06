const counterValue = document.getElementById("counter")

const decrementBtn = document.querySelector('.counter button[data-action="decrement"]')
const incrementBtn = document.querySelector('.counter button [data-action="increment"]');
const resetBtn = document.querySelector("#value");



incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
resetBtn.addEventListener('click', value);
 
function value() {
    counter = 0;
    counterValue.innerHTML = counter;
}



console.log(counterValue);