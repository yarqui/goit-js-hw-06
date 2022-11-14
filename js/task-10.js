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
  let str = `<div style="width:${boxSize}px; height:${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
  let multiString = "";

  for (let i = 0; i < amount; i += 1) {
    multiString += str;
    str = `<div style="width:${(boxSize += 10)}px; height:${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  boxesRef.insertAdjacentHTML("beforeend", multiString);
};

const onClickButtonDestroy = () => {
  boxesRef.innerHTML = "";
  inputRef.value = "";
};

const onClickButtonCreate = () => {
  createBoxes(inputRef.value);
};

createBtn.addEventListener("click", onClickButtonCreate);
destroyBtn.addEventListener("click", onClickButtonDestroy);
