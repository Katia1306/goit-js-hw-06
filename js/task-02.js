const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(".ingredients");
const item = document.createElement("li");
item.textContent = "Potatoes","Mushrooms","Garlic","Tomatos","Herbs","Condiments";


list.append(item);

console.log(list);
