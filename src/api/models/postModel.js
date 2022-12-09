const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    thread: { type: mongoose.Schema.Types.ObjectId, ref: "threads" },
    tags: [
      {
        type: String,
      },
    ],
    question: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("posts", postSchema);
