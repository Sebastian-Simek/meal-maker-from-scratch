import { renderIngredient, renderMeal } from './utils.js';

const ingredientForm = document.getElementById('ingredients-added');
const ingredientsList = document.getElementById('ingredient-list');
const removeButton = document.getElementById('remove');
const saveButton = document.getElementById('save-meal');
const mealName = document.getElementById('meal-name');
const savedMealList = document.getElementById('saved-meal-list');

let ingredientArray = [];
let savedMealsArray = [];

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

function displayMeals() {
    savedMealList.textContent = '';
    for (let meal of savedMealsArray) {
        const savedMealsOutput = renderMeal(meal);
        savedMealList.appendChild(savedMealsOutput);
    }
}

saveButton.addEventListener('click', () => {
    let savedMeals = {
        name: mealName.value,
        ingredients: ingredientArray.length,
    };
    savedMealsArray.push(savedMeals);
    displayMeals();
});

