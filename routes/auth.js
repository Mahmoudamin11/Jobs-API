import express from "express";
import AuthController from "../controllers/auth.js";
import validation from "../middleware/validate.js";
import { registerSchema, loginSchema } from "../validators/auth.schema.js";

const router = express.Router();

const controller = new AuthController();

router.post("/register", validation(registerSchema), controller.register);
router.post("/login", validation(loginSchema), controller.login);

export default router;
