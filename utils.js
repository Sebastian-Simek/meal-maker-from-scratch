
export function renderIngredient(ingredient) {
    const ingredientList = document.createElement('li');
    ingredientList.textContent = `${ingredient.quantity} ${ingredient.unit} of ${ingredient.ingredients}`;
    return ingredientList;
}

export function renderMeal(booger) {
    const mealList = document.createElement('li');
    mealList.textContent = `${booger.name}-${booger.ingredients} ingredients`;
    return mealList;
}

