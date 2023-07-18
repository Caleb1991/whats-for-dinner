//////////// classes

class CookBook {
  constructor(sides, mainDishes, desserts) {
    this.sides = sides;
    this.mainDishes = mainDishes;
    this.desserts = desserts;
  }

  addRecipie(recipe, dishType) {
    this[dishType].push(recipe);
    return `${recipe} has been added to ${dishType}`;
  }

  getRandomDish(dishType) {
    let index = Math.floor(Math.random() * this[dishType].length);

    return this[dishType][index];
  }
}

//////////// functions

getElement = (element) => {
  return document.querySelector(element);
}

//////////// variables

let sides = ['French Fries', 'Broccolli', 'Corn', 'Carrots', 'Mashed Potatos'];
let mainDishes = ['Tofu', 'BBQ Chicken', 'Ribs', 'Pork Belly', 'Pork Chops'];
let desserts = ['Cherry Pie', 'Vanilla Ice Cream', 'Chocolate Mousse', 'Rice Pudding', 'Brownies'];

let cookBook = new CookBook(sides, mainDishes, desserts);

//////////// eventListeners

getElement('.submit-button').addEventListener('click', () => {
  let buttons = document.querySelectorAll('input[type=radio]');

  for (let button of buttons) {
    if (button.checked) {
      getElement('.background-img').classList.add('hidden');
      getElement('.dish').classList.remove('hidden');
      if (button.value == 'main-dish') {
        let dish = cookBook.getRandomDish('mainDishes');
        getElement('.dish').children[1].innerHTML = dish;
      } else {
        let dish = cookBook.getRandomDish((button.value + 's'));
        getElement('.dish').children[1].innerHTML = dish;
      }
    }
  }
})