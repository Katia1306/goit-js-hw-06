const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener('input', () => {
    
    const textSize = input.value;
    text.style.fontSize = `${textSize}px`;
});
