import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
import UserService from "./UserService.js";

class AuthService {
  constructor() {
    this.userService = new UserService();
  }
  async register(data) {
    const existingUser = await this.userService.findByEmail(data.email);
    if (existingUser) throw new BadRequestError("User already exists");

    const user = await this.userService.createUser(data);

    // generate token
    const token = user.createJWT();

    return { user: { ...user.getUser() }, token };
  }
  async login(data) {
    const { email, password } = data;
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthenticatedError("Invalid credentials");
    await user.comparePassword(password);
    const token = user.createJWT();
    return { user: { ...user.getUser() }, token };
  }
}

export default AuthService;
