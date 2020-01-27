import {
  createIngredients,
  findAllIngredients,
  findIngredient,
  findIngredientFields,
  findIngredients
} from "./ingredient.repository";
import {ingredientsParser} from "../../parsers";

export const createIngredientsService = (db, rawItem) => {
  const parsedIngredients = ingredientsParser.parse(rawItem);
  const parsedIngredientsList = Object.keys(parsedIngredients).reduce((list, name) => {
    return [...list, {name, ...parsedIngredients[name]}];
  }, []);

  const ingredients = parsedIngredientsList;

  return createIngredients(db, ingredients)
    .then(() => ({...ingredients}));
};

const ingredientFinder = ({ingredientId, filter, db}) => {
  // validate filter
  if (ingredientId) return findIngredient(db, ingredientId);
  if (filter) return findIngredients(db, filter);
  return findAllIngredients(db);
};

const addFields = db => ingredients => findIngredientFields(db)
    .then(result => ( {fields: result, items: ingredients} ));

export const findIngredientsService = (db, {ingredientId, filter}) =>
  ingredientFinder({db, ingredientId, filter})
    .then(addFields(db));
