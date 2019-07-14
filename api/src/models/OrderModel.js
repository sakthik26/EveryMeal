const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userID: {
    type: String,
    required: true,
    trim: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateDelivered: {
    type: Date
  },
  status: {
    type: String,
    enum: ["INPROGRESS", "DELIVERED"],
    default: "INPROGRESS"
  },
  orderType: {
    type: String,
    enum: ["ONETIME", "SUBSCRIPTION"],
    default: "ONETIME"
  },
  total: {
    type: Number
  }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
