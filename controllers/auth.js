const AuthService  = require("../services/AuthService")

const { StatusCodes } = require("http-status-codes");

// const register = async (req, res) => {
//   const body = req.body;
//   const user = await User.create(body);
//   res.status(StatusCodes.CREATED).json(user);
// };

// const login = async (req, res) => {
//   res.send(`login user`);
// };

// module.exports = {
//   register,
//   login,
// };

export class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  register = async (req, res, next) => {
    try {
      const user = await this.authService.register(req.body);
      res.status(StatusCodes.CREATED).json(user);
    } catch (error) {
      next(error);
    }
  };
}
