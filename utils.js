export function renderIngredient(ingredient) {
    const ingredientList = document.getElementById('ingredient-list'
    );
    ingredientList.textContent = `${ingredient.quantity} ${ingredient.unit} of ${ingredient.ingredients} `;
    return ingredientList;
}