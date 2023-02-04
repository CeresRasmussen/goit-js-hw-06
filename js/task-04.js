// Завдання 4

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const increaseValueBtn = document.querySelector('button[data-action="increment"]');
const decreaseValueBtn = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector("#value");
let counterValue = 0;

const clickOnBtn = (e) => {
  e.currentTarget.textContent === "+1"
    ? (counter.textContent = counterValue += 1)
    : (counter.textContent = counterValue -= 1);
};
increaseValueBtn.addEventListener("click", clickOnBtn);
decreaseValueBtn.addEventListener("click", clickOnBtn);

// const increaseValue = () => {
//   counter.textContent = counterValue += 1;
// };

// const decreaseValue = () => {
//   counter.textContent = counterValue -= 1;
// };

// increaseValueBtn.addEventListener("click", increaseValue);
// decreaseValueBtn.addEventListener("click", decreaseValue);
