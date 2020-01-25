import {createIngredientService, findIngredientsService} from "./ingredient.service";

const parseFilter = (_) => null;

export const findIngredientController = (db) => (req) => {
    const ingredientId = req?.params?.id;
    const filter = parseFilter(req.query);
    return findIngredientsService(db, {ingredientId, filter});
};

export const createIngredientController = (db) => (req) => {
  return createIngredientService(db, req.body);
};
