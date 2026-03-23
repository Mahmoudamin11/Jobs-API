import express from "express";
import AuthController from "../controllers/auth.js";
import validation from "../middleware/validate.js";
import registerSchema from "../validators/auth.schema.js";

const router = express.Router();

const controller = new AuthController();

router.post("/register", validation(registerSchema), controller.register);
router.post("/login", (req, res) => {
  res.send(`login user`);
});

export default router;
