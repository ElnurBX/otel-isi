const mongoose = require("mongoose");

const Order = mongoose.model("Order", new mongoose.Schema({
  title: {
    type: String,
    required: true // Bu alanın gerekli olduğundan emin olun
  },
}));

module.exports = { Order };
