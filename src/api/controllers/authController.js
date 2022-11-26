const validation = require("../validations");
const validateRegisterInput = validation.registerValidate;
const validateLoginInput = validation.loginValidate;
const authService = require("../services/authService");

//register a user
exports.register_a_user = async (req, res) => {
  req.body = JSON.parse(JSON.stringify(req.body));
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //exception handling
  try {
    // Check if user exists
    if (await authService.check_if_user_exists(req.body.email)) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      // Hash password before saving in database
      const newPassword = await authService.hash_password(
        req.body.password,
        10
      );
      // Create a new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: newPassword,
      });
      // Save user in the database
      return res.json(await authService.save_user(newUser));
    }
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};

//login a user
exports.login_a_user = async (req, res) => {
  req.body = JSON.parse(JSON.stringify(req.body));
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //exception handling
  try {
    // Check if user exists
    if (!(await authService.check_if_user_exists(req.body.email))) {
      return res.status(400).json({ email: "User doesn't exist" });
    }
    const user = await authService.find_user(email);
    // Check password
    const isMatch = await authService.compare_password(password, user.password);
    if (isMatch) {
      // User matched
      // JWT Payload
      const payload = {
        id: user.id,
        username: user.username,
      };
      // Sign token
      const token = authService.generate_token(payload);
      return res.json({
        user: payload,
        success: true,
        token: "Bearer " + token,
      });
    } else {
      return res.status(400).json({ error: "Credentials incorrect" });
    }
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong" });
  }
};
