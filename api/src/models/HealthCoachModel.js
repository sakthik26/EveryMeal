const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HealthCoachSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: false,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  bio: {
    type: String,
    required: false
  }
});

const HealthCoach = mongoose.model("HealthCoach", HealthCoachSchema);

module.exports = HealthCoach;
