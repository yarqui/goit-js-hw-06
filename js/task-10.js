const inputRef = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  let boxSize = 30;
  let str = `<div style="width:${boxSize}px; height:${boxSize}px"></div>`;
  let multiBox = "";

  for (let i = 0; i < amount; i += 1) {
    multiBox += str;
    str = `<div style="width:${(boxSize += 10)}px; height:${boxSize}px"></div>`;
  }
  boxesRef.insertAdjacentHTML("beforeend", multiBox);
};

const doMagic = (event) => {
  createBoxes(event.currentTarget.value);
};

createBtn.addEventListener("click", createBoxes);
inputRef.addEventListener("change", doMagic);
