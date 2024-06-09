const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  phone: {
    type: Number,
  },
  time: {
    type: String,
  },
  person: {
    type: Number,
  },
  teenager: {
    type: Number,
  },
  child: {
    type: Number,
  },
  food: {
    type: Number,
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  complete: {
    type: Boolean,
    default: false
  }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
