import {INGREDIENTS} from "../../utils/constants";

export const createIngredients = (db, ingredients) => {
    return db.collection(INGREDIENTS).insertMany(ingredients);
};

export const findIngredients = (db, filter) => {
    return db.collection(INGREDIENTS).find({filter}).toArray();
};

export const findIngredient = (db, ingredientId) => {
    return db.collection(INGREDIENTS).findOne({_id: ingredientId});
};

export const findAllIngredients = db => {
    return db.collection(INGREDIENTS).find({}).toArray();
};

export const findIngredientFields = db => {
  return db.collection("lists-fields").find({list: INGREDIENTS});
};
