import {Router} from "express";

export function routes(db): Router {
  const router = Router();

  router.get("/pepe", (req, res) => {
    db.collection("pepe").insertOne({name: "pepe"});
    res.send("pepe");
  });

  return router;
}
