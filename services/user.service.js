import User from "../db/models/User.js";

class UserService {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }
  async createUser(data) {
    return await User.create(data);
  }
}

export default UserService;
