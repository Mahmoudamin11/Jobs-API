import User from "../db/models/User.js";

class UserService {

  async findByEmail(email) {
    return await User.findOne({ email });
  }
  async createUser(data) {
    return await User.create(data);
  }
}

export default UserService;
