import {createIngredientsService, findIngredientsService} from "./ingredient.service";
import {InvalidArgumentError} from "../../utils/errors";

const parseFilter = (_) => null;

export const findIngredientController = (db) => (req) => {
  const ingredientId = req?.params?.id;
  const filter = parseFilter(req.query);
  return findIngredientsService(db, {ingredientId, filter});
};

export const createIngredientController = (db) => (req) => {
  const rawItem = req.body.item;
  if (!rawItem || typeof rawItem !== "string") throw new InvalidArgumentError("item", rawItem);
  return createIngredientsService(db, rawItem);
};
