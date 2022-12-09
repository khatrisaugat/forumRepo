const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const threadSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("threads", threadSchema);
