import {Router} from "express";

export function routes(db): Router {
  const router = Router();

  router.get("/recipes", (req, res) => {
    const fullRecipe = {
      recipes: [{id: 1, pepe: "pepe", lalo: "lalo"}],
      fields: ["pepe", "lalo"],
    };
    // db.collection("recipes").insertOne(fullRecipe);
    res.json(fullRecipe);
  });

  router.get("/ingredients", (req, res) => {
    const fullIngredients = {
      ingredients: [{id: "pepe", uno: 1, dos: 2, tres: 3, cuatro: 4}],
      fields: ["uno", "dos", "tres"],
    };
    // db.collection("recipes").insertOne(fullRecipe);
    res.json(fullIngredients);
  });

  return router;
}
