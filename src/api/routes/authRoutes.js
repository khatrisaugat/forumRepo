const authRoutes = (router) => {
  const authControl = require("../controllers/authController");

  // @route POST api/users/register
  // @desc Register user
  // @access Public
  router.post("/users/register", authControl.register_a_user);

  // @route POST api/users/login
  // @desc Login user and return JWT token
  // @access Public
  router.post("/users/login", authControl.login_a_user);

  // @route GET api/users/current
  // @desc Return current user
  // @access Private
  router.get("/users/current", authControl.current_user);
};

module.exports = authRoutes;
