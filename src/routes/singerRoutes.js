import express from "express";
import singerController from "../controller/singerController.js";


const router = express.Router();

router.post("/", singerController.createSinger);
router.get("/index", singerController.index);

export default router;