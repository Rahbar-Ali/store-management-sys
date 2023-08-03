const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: [true, "type is required"],
    },
    items: {
      type: String,
      required: [true, "cate is required"],
    },
    tp: {
      type: Number,
    },
    discount: {
      type: Number,
      required: [true, "Disc is required"],
    },
    amount: {
      type: Number,
      required: [true, "date is required"],
    },
    date: {
      type: String,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transections", transectionSchema);
module.exports = transectionModel;
