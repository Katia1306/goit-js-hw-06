const output = document.querySelector("#name-output");
const input = document.querySelector("name-input");

input.addEventListener("input", () => {


  output.textContent = event.target.value||`Anonymous`;

});

console.log(input);