const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer")) {
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in ! Please log in",
      });
    }

    const token = authorization.split(" ")[1]; // arrayg space r ni huwaagad indexiin 1 dahi elementiiig aw (tokenoo awj bn)

    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in ! Please log in",
      });
    }

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return res.status(401).json({
        status: "fail",
        message: "The user belonging to this token no longer exists.",
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid token! Please log in again",
    });
  }
};
