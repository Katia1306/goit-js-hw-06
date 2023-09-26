const counterValue = document.getElementById("counter");

const decrementBtn = document.querySelector('.counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('.counter button [data-action="increment"]');
const resultBtn = document.querySelector("#value");
let counter = 0;


incrementBtn.addEventListener('click', () => {
    counter +=1;
    resultBtn.textContent = counter;
});
decrementBtn.addEventListener('click', () => {
    counter -=1;
    resultBtn.textContent = counter;
});



console.log(resultBtn);