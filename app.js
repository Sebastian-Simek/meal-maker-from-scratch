const ingredientForm = document.getElementById('ingredients-added');

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
    ingredientForm.reset();
});
