const btnRef = document.querySelector("button.change-color");
const textSpanRef = document.querySelector("span.color");

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const onChangeColor = () => (textSpanRef.textContent = getRandomHexColor());

btnRef.addEventListener("click", onChangeColor);
