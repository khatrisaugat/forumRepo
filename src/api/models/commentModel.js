const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require("./userModel");
const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: user,
  },
  { timestamps: true }
);
module.exports = mongoose.model("comments", commentSchema);
