const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
const generateJwtToken = (id, name, email) => {
  return jwt.sign({ id, name, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
exports.signup = async (req, res) => {
  try {
    const aUser = await User(req.body);
    const newUser = await aUser.save();

    res.status(201).json({
      status: "success",
      data: { user: newUser },
    });
  } catch (err) {
    if (
      err.name === "ValidationError" ||
      (err.name === "MongoServerError" && err.code === 11000)
    ) {
      return res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  //loging huselt awla
  const { email, password } = req.body; // huseltess email password barij awj bn
  if (!email || !password) {
    // checking
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password ! ",
    });
  }
  try {
    const user = await User.findOne({ email }).select("+password"); //tuhain hereglegchiin data medeeleliin DBs shalgaj bn
    if (!user || !user.matchPassword(password, user.password)) {
      //user.password bol Db -d hadgalagdsan pass
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password ",
      });
    }

    const jwtToken = generateJwtToken(user._id, user.name, user.email);

    res.status(200).json({
      status: "success",
      message: "you are logged in successfully! ",
      token: jwtToken,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
