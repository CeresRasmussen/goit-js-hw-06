// Завдання 10

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor
// для отримання кольору.

const quantityBoxInput = document.querySelector("input");
const createBoxBtn = document.querySelector("[data-create]");
const destroyBoxBtn = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

const boxes = [];
let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
    size += 10;
  }
  boxContainer.append(...boxes);
}

function quantityBox() {
  const quantity = quantityBoxInput.value > 0 ? Number(quantityBoxInput.value) : 1;
  createBoxes(quantity);
}

function cleanAll() {
  boxContainer.innerHTML = "";
  quantityBoxInput.value = "";
  boxes.length = 0;
  size = 30;
}

createBoxBtn.addEventListener("click", quantityBox);
destroyBoxBtn.addEventListener("click", cleanAll);
