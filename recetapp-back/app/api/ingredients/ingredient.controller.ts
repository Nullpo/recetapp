export const ingredientController = (db) => (req) => {
    console.log(req.body);
    const fullIngredients = {
        ingredients: [{id: "pepe", uno: 1, dos: 2, tres: 3, cuatro: 4}],
        fields: ["uno", "dos", "tres"],
    };
    db.collection("ingredients").find({});
    return fullIngredients;
};
