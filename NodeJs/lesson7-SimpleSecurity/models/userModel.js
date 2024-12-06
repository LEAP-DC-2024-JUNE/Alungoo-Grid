const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide  a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minlength: 8,
    select: false, //pass haruuldaggui!
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (param) {
        return param === this.password; // this ==> gedeg ni ooroo buyu useSchema umaa!
      },
      message: "Password is not matching",
    },
  },
});

// save uildel hiihees omno gej bga shuu ene pre
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12); // hashing-->jhdfgsldhfblsjdhfblshbf iim bolgoj bga gsn vg
  this.confirmPassword = undefined;
});

userSchema.methods.matchPassword = async function (
  userInputPassword,
  userPassword
) {
  return await bcrypt.compare(userInputPassword, userPassword);
};
//password oorchilson bol gj bga next gsn function duudaj bn
// if (this.isModified("password")) {
//   return next();

const User = mongoose.model("User", userSchema);
module.exports = User;
