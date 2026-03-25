import { BadRequestError } from "../errors/index.js";
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
    // get user created
    const newUser = user.getUser();

    return { user:{...newUser}, token };
  }
}

export default AuthService;
