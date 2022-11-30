const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
authRoutes(router);
const threadRoutes = require("./threadRoutes");
threadRoutes(router);
// const router = authRoutes.router;

module.exports = router;
