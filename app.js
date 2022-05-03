import { renderIngredient } from './utils.js';

const ingredientForm = document.getElementById('ingredients-added');
const ingredientsList = document.getElementById('ingredient-list');

let ingredientArray = [];
console.log(ingredientArray);

ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);
    
    let mealIngredients = {
        ingredients: ingredientData.get('ingredients-input'),
        quantity: ingredientData.get('quantity'),
        unit: ingredientData.get('measurement-type'),
    };
    ingredientArray.push(mealIngredients);
    displayIngredients();
    ingredientForm.reset();
});

function displayIngredients() {
    ingredientsList.textContent = '';
    for (let item of ingredientArray) {
        const ingredientOutput = renderIngredient(item);
        ingredientsList.appendChild(ingredientOutput);
    }
} 
// function renderIngredient(ingredient) {
//     const li = document.createElement('li');
//     li.textContent = `${ingredient.quantity} ${ingredient.unit} of ${ingredient.ingredients}`;
//     console.log(li);
//     return li;
// }