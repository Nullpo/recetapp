import {Router} from "express";
import {respond} from "../controller";


const ingredients = (db) => {
    const router = Router();

    router.get("/", (req, res) => {
        const fullIngredients = {
            ingredients: [{id: "pepe", uno: 1, dos: 2, tres: 3, cuatro: 4}],
            fields: ["uno", "dos", "tres"],
        };
        res.json(fullIngredients);
    });

    return router;
};

export default ingredients;
