const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
authRoutes(router);
const threadRoutes = require("./threadRoutes");
threadRoutes(router);
const postRoutes = require("./postRoutes");
postRoutes(router);
const commentRoutes = require("./commentRoutes");
commentRoutes(router);
// const router = authRoutes.router;

module.exports = router;
