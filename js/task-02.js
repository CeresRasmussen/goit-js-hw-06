// Завдання 2

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ingredientsUl = document.querySelector("#ingredients");

// const ingredientsSet = ingredients.reduce(
//   (prew, next) => prew + `<li class="item">${next}</li>`,
//   ""
// );
// ingredientsUl.innerHTML = ingredientsSet;

const ingredientList = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});

ingredientsUl.append(...ingredientList);
