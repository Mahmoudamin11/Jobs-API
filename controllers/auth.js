import AuthService from "../services/AuthService.js";
import { StatusCodes } from "http-status-codes";

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  register = async (req, res, next) => {
    console.log("Entered Here", this.authService);

    const user = await this.authService.register(req.body);
    res.status(StatusCodes.CREATED).json(user);
  };
}

export default AuthController;
