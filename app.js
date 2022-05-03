import { renderIngredient } from './utils.js';

const ingredientForm = document.getElementById('ingredients-added');
const ingredientsList = document.getElementById('ingredient-list');
const removeButton = document.getElementById('remove');

let ingredientArray = [];

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

removeButton.addEventListener('click', () => {
    ingredientArray.pop();
    displayIngredients();
});