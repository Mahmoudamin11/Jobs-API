const express = require("express");
const validatation = require("../middleware/validate");
const { registerSchema } = require("../validators/auth.schema");
const router = express.Router();

const AuthController = require("../controllers/auth");
const controller = new AuthController();

router.post("/register", validatation(registerSchema), controller.register);
// router.post("/login", login);

module.exports = router;
