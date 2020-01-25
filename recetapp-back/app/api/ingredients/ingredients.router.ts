import {Router} from "express";
import {respond} from "../controller";
import {findIngredientController, createIngredientController} from "./ingredient.controller";


const ingredients = (db) => {
    const router = Router();

    router.get("/", respond(findIngredientController(db)));
    router.get("/:id", respond(findIngredientController(db)));
    router.post("/", respond(createIngredientController(db)));
    return router;
};

export default ingredients;
