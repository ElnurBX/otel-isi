const { Order } = require("../models/Order.model");

const OrderController = {
  getAll: async (req, res) => {
    try {
      const items = await Order.find();
      res.send(items);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Order.findById(id);
      res.send(item);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const newOrder = new Order({ ...req.body });
      await newOrder.save();
      const items = await Order.find();
      res.send(items);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await Order.findByIdAndDelete(id);
      const items = await Order.find();
      res.send(items);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      await Order.findByIdAndUpdate(id, { ...req.body });
      const items = await Order.find();
      res.send(items);
    } catch (error) {
      res.status(404).send(error);
    }
  }
};

module.exports = { OrderController };
