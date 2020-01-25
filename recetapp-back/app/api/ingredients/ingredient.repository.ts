export const createIngredient = (db, ingredient) => {
    return db.collection("ingredients").insertOne(ingredient);
};

export const findIngredients = (db, filter) => {
    return db.collection("ingredients").find({filter}).toArray();
};

export const findIngredient = (db, ingredientId) => {
    return db.collection("ingredients").findOne({_id: ingredientId});
};

export const findAllIngredients = (db) => {
    return db.collection("ingredients").find({}).toArray();
};
