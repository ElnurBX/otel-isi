const express = require("express");
const { OrderController } = require("../controllers/Order.controller");
const router = express.Router();

router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getById);
router.post("/", OrderController.add);
router.delete("/:id", OrderController.delete);
router.put("/:id", OrderController.edit);

module.exports = router;
