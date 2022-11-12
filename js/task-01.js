const categoriesRef = document.querySelector("#categories");
console.log("Number of categories: ", categoriesRef.children.length);

const categoryElementRef = document.querySelectorAll(".item");

categoryElementRef.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});
