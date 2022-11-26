require("dotenv").config();
const express = require("express");
const passport = require("passport");
const router = require("./api/routes");
// const router = routes.router;
console.log("router", router);
const app = express();
const { PORT } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./config/connectDb");
db.connectDb();
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", router);
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
