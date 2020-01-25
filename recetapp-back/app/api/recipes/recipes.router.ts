import {Router} from "express";

const recipes = (__) => {
    const router = Router();

    router.get("/", (_, res) => {
        const fullRecipe = {
            recipes: [{id: 1, pepe: "pepe", lalo: "lalo"}],
            fields: ["pepe", "lalo"],
        };
        res.json(fullRecipe);
    });

    return router;
};

export default recipes;
