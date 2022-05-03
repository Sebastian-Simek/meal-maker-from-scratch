import { renderIngredient } from './utils.js';

const ingredientForm = document.getElementById('ingredients-added');
const ingredientsList = document.getElementById('ingredient-list');
const removeButton = document.getElementById('remove');
const saveButton = document.getElementById('save-meal');
const mealName = document.getElementById('meal-name');

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

saveButton.addEventListener('click', () => {
    // for (let numOfIngredients of ingredientArray){
    //     let ourIngredients = numOfIngredients.Ingredients;
    //     console.log(ourIngredients);
    
    let savedMeals = {
        Name: mealName.value,
        Ingredients: ingredientArray.length,
    };
    console.log(savedMeals);
});