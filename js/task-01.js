// Завдання 1

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const listItem = document.querySelectorAll("li.item");

console.log(`Number of categories: ${listItem.length}`);
const dmdm = listItem.forEach((el) => {
  const category = el.querySelector("h2");
  const categoriesElement = el.querySelectorAll("li");
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${categoriesElement.length}`);
  //   console.log(`Category: ${el.querySelector("h2").textContent}`);
  //   console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
