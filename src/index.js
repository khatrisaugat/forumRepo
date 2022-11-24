require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
