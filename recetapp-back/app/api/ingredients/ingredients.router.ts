import {Router} from "express";
import {respond} from "../controller";

const router = Router();

router.get("/", respond((req) => "pepe"));


export default router;
