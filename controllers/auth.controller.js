import AuthService from "../services/auth.service.js";
import { StatusCodes } from "http-status-codes";

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  register = async (req, res, next) => {
    const user = await this.authService.register(req.body);
    res.status(StatusCodes.CREATED).json(user);
  };
  login = async (req, res, next) => {
    const user = await this.authService.login(req.body);
    res.status(StatusCodes.OK).json(user);
  };
}

export default new AuthController();
