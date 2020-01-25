import {Router} from "express";
import {respond} from "../controller";
import {ingredientController} from "./ingredient.controller";


const ingredients = (db) => {
    const router = Router();

    router.get("/", respond(ingredientController(db)));

    return router;
};

export default ingredients;
