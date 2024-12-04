const User = require("../models/userModel");
exports.signup = async (req, res) => {
  try {
    const aUser = await User(req.body);
    const newUser = aUser.save();

    res.status(201).json({
      status: "success",
      data: { user: newUser },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
