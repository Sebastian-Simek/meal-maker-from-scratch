import { renderIngredient } from './utils.js';

const ingredientForm = document.getElementById('ingredients-added');
const ingredientsList = document.getElementById('ingredients-list');

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
    for (let ingredient of ingredientArray) {
        const ingredientList = renderIngredient(ingredient);
        ingredientList.appendChild(ingredient);
    }
} 
console.log(renderIngredient);