const User = require("../db/models/User.js");

class UserService {
  async findByEmail(email) {
    return await User.findOne({ email });
  }
  async createUser(data) {
    return await User.create(data);
  }
}

module.exports = UserService;
