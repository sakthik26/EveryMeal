const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userid: {
        type: String,
        required: true,
        trim: true
    },
  datecreated: {
    type: Date,
    default: Date.now
  },
  datedelivered: {
    type: Date
  },
  status: {
    type: String,
    enum: ["inprogress", "delivered"],
    default: "inprogress"
  },
  ordertype: {
    type: String,
    enum: ["onetime", "subscription"],
    default: "onetime"
  },
  productid:[{
    type: String,
    required: true}],
    
  mealquantity:{
    type: Number,
    required: true,
    default: 1,
    min: [1, "Must order at least one"],
    max: [4, "Quantity not available"]

  },
  portionsize:{
    type: Number,
    required: true,
    default: 1,
    min: 0.5,
    max: 1,
    validate(value) {
        if(value<0.5 || value>1){
            throw new Error("Portion size not available")
        }
    }
  },
  additionalcomments:{
    type: String,
    trim: true,
    maxlength: [500, "Character limit is 500"],
    default: ""
  },
  timeslot:{
      type: String,
      required: true

  },
  address:{
    type: String,
    required: true
  },
  startingdate:{
    type: Date,
    required:true
  },
  total: {
    type: Number,
    required:true
  }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;