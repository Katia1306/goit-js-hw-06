function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const color = getRandomHexColor();

btn.addEventListener('click',  () => {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`
});


