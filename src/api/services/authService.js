const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const model = require("../models");
const User = model.User;
exports.hash_password = (password, salt) => bcrypt.hash(password, salt);

exports.save_user = async (user) => {
  try {
    const savedUser = await user.save();
    return savedUser;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.check_if_user_exists = async (email) => {
  const user = await User.findOne({ email: email });
  if (user) {
    return true;
  } else {
    return false;
  }
};

exports.find_user = async (email) => {
  try {
    const user = await User.findOne({
      email: email,
    }).select("-password");
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.compare_password = async (password, userPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, userPassword);
    return isMatch;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.generate_token = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 31556926, // 1 year in seconds
  });
};

exports.decode_token = (token) => {
  try {
    const newToken = token.replace("Bearer ", "");
    console.log(jwt.verify(newToken, process.env.JWT_SECRET));
    return jwt.verify(newToken, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err);
  }
};
