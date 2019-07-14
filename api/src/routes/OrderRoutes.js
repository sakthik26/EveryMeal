const express = require("express");
const Order = require("../models/OrderModel");

const orderRouter = express.Router();

orderRouter.post("/order", async function(req, res) {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).send({ newOrder });
  } catch (error) {
    res.status(400).send(error);
  }
});

orderRouter.get("/order", async function(req, res) {
  Order.find({}, (err, order) => {
    if (err) {
      res.send(err);
    }
    res.json(order);
  });
});

orderRouter.get("/order/:orderID", async function(req, res) {
  Order.findById(req.params.orderID, (err, order) => {
    if (err) {
      res.send(err);
    }
    res.json(order);
  });
});

orderRouter.put("/order/:orderID", async function(req, res) {
  Order.findOneAndUpdate(
    { _id: req.params.orderID },
    req.body,
    { new: true },
    (err, order) => {
      if (err) {
        res.send(err);
      }
      res.json(order);
    }
  );
});

orderRouter.delete("/order/:orderID", async function(req, res) {
  const id_removed = req.params.orderID;
  Order.remove({ _id: req.params.orderID }, (err, order) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: `Successfully deleted Order with id: ${id_removed}`
    });
  });
});

module.exports = orderRouter;
