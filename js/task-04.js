// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
//
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
//
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

const valueRef = document.querySelector("#value");
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const incrementNumber = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrementNumber = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

incrementBtnRef.addEventListener("click", incrementNumber);
decrementBtnRef.addEventListener("click", decrementNumber);
