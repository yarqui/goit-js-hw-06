const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.value = 16;

fontSizeControlRef.addEventListener("input", () => {
  textRef.style.fontSize = fontSizeControlRef.value + "px";
});
