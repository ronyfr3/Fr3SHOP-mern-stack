const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // userName: { type: String },
    email: { type: String },
    password: { type: String },
    // password2: { type: String },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
