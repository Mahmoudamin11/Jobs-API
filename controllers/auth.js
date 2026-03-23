import AuthService from "../services/AuthService.js";
import { StatusCodes } from "http-status-codes";

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  register = async (req, res, next) => {
    // try {
      console.log("Entered Here", this.authService);

      const user = await this.authService.register(req.body);
      res.status(StatusCodes.CREATED).json(user);
    // } catch (error) {
    //   console.log("Error in register:", error);
    //   next(error);
    // }
  };
}

export default AuthController;
