const mongoose = require("mongoose");

const Order = mongoose.model("Order", new mongoose.Schema({
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
  }
  
}));

module.exports = { Order };
