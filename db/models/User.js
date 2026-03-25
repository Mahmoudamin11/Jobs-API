import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const { model, Schema } = mongoose;
import generateToken from "../../utils/jwt.js";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

UserSchema.methods.createJWT = function () {
  const user = { ...this };
  return generateToken(user._doc);
};

UserSchema.methods.getUser = function () {
  return {
    _id: this._id,
    name: this.name,
    email: this.email,
  };
};

export default model("User", UserSchema);
