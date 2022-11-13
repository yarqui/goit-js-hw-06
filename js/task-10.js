function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);

const createBoxes = (amount) => {
  amount = inputRef.value;
  return console.log(amount);
};
