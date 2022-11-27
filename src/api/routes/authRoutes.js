const express = require("express");
const router = express.Router();
// const keys = require("../../config/keys");
// Load input validation

const authControl = require("../controllers/authController");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", authControl.register_a_user);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", authControl.login_a_user);

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get("/current", authControl.current_user);

module.exports = router;
