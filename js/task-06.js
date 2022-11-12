const inputRef = document.querySelector("#validation-input");
const dataLengthAttr = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", () => {
  if (
    inputRef.value.length < dataLengthAttr ||
    inputRef.value.length > dataLengthAttr
  ) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
});
