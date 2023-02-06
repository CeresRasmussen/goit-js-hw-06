// Завдання 9

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const bodyColorName = document.querySelector(".color");
const changeBtnColor = document.querySelector(".change-color");

changeBtnColor.addEventListener("click", () => {
  const randomBackgroundColor = getRandomHexColor();
  body.style.backgroundColor = randomBackgroundColor;
  bodyColorName.textContent = randomBackgroundColor;
});
