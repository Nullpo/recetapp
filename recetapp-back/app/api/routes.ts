import {Router} from "express";
import recipes from "./recipes/recipes.router";
import ingredients from "./ingredients/ingredients.router";

export function routes(db): Router {
  const router = Router();

  router.use("/recipes", recipes(db));
  router.use("/ingredients", ingredients(db));

  return router;
}
