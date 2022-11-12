const textInputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

console.log(textInputRef);

textInputRef.addEventListener("input", () => {
  if (textInputRef.value === "") {
    outputRef.textContent = "Anonymous";
  } else {
    outputRef.textContent = textInputRef.value.trim();
  }
});
