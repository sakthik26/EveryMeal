const mongoose = require('mongoose');


const mealPlanSchema = mongoose.Schema({
    mealsession:{
        type:String,
        required: true,
        enum: ['Breakfast','Lunch','Snacks','Dinner'],
        trim:true,
        minlength: 3,
        maxlength: 10
   },
   mealplanname:{
        type:String,
        required: true,
        trim:true,
        minlength: 3
   },
   startingprice:{
       type:Number,
       required: true,
       min: 10
   },
   description:{
       type:String,
       required: true,
       minlength: 3,
       maxlength: 300
   },
   image:{
       type:String,
       required:true,
       minlength: 8
   },
})

const MealPlans = mongoose.model('MealPlans',mealPlanSchema)

module.exports = MealPlans;

/* Vegan, paleo, veg, peskitarian, snacks, salad */