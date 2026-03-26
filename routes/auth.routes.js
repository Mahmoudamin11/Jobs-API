import express from "express";
import AuthController from "../controllers/auth.controller.js";
import validation from "../middleware/validate.js";
import { registerSchema, loginSchema } from "../validators/auth.schema.js";

const router = express.Router();


router.post("/register", validation(registerSchema), AuthController.register);
router.post("/login", validation(loginSchema), AuthController.login);

export default router;
