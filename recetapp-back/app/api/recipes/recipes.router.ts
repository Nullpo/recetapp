import {Router} from "express";
import {respond} from "../controller";

const recipes = (db) => {
    const router = Router();

    router.get("/", (req, res) => {
        const fullRecipe = {
            recipes: [{id: 1, pepe: "pepe", lalo: "lalo"}],
            fields: ["pepe", "lalo"],
        };
        res.json(fullRecipe);
    });

    return router;
};

export default recipes;
