import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign({ _id: user._id, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

export default generateToken;
