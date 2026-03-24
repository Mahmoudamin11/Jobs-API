import { BadRequestError } from "../errors/index.js";
import UserService from "./UserService.js";

class AuthService {
  constructor() {
    this.userService = new UserService();
  }
  async register(data) {
    const existingUser = await this.userService.findByEmail(data.email);
    if (existingUser) throw new BadRequestError("User already exists");
    // hashing the data.password
    
    // generate token
    // return the user and the token

    const user = await this.userService.createUser(data);
    const token = "token";
    return { user, token };
  }
}

export default AuthService;
