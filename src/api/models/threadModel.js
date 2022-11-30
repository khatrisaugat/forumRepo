const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const threadSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("threads", threadSchema);
