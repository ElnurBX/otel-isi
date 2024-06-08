const mongoose = require("mongoose");

const Order = mongoose.model("Order", new mongoose.Schema({
  title: {
    type: String,
  },
}));

module.exports = { Order };
