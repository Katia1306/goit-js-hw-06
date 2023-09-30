const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener('input', () => {
    
    const textSize = input.value;
    text.style.fontSize = `${input.value}px`;
    //text.style.fontSize = `${textSize}px`;
});


