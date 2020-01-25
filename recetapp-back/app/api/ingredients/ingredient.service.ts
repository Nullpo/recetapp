import {createIngredient, findAllIngredients, findIngredient, findIngredients} from "./ingredient.repository";

export const createIngredientService = (db, ingredient) => {
    return createIngredient(db, ingredient)
        .then(() => ({...ingredient}));
};

export const findIngredientsService = (db, {ingredientId, filter}) => {
    if (ingredientId) return findIngredient(db, ingredientId);
    if (filter) return findIngredients(db, filter);
    return findAllIngredients(db);
};
