// Завдання 7

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль
// span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const rangeInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
rangeInput.setAttribute("value", "16");
rangeInput.addEventListener("input", () => {
  spanText.style.fontSize = rangeInput.value + "px";
});
