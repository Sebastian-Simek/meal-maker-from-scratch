
export function renderIngredient(ingredient) {
    const ingredientList = document.createElement('li');
    ingredientList.textContent = `${ingredient.quantity} ${ingredient.unit} of ${ingredient.ingredients}`;
    return ingredientList;
}