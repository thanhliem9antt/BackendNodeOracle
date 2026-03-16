import express from "express";
import accountController from "../controller/accountController.js";

const router = express.Router();
router.post("/register", accountController.createAccount);

export default router;