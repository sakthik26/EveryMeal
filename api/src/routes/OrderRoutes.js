const express = require('express');
const OrderModel = require('../models/OrderModel')
//const auth = require('../middleware/auth')

const router = express.Router();

router.post('/eat/order/',async function(req,res){

    try{
        const order = new OrderModel(req.body);
        await order.save();
        res.status(201).send({order});
    }
    catch(error){
      res.status(400).send(error);
    }
})
router.get('/eat/order/',async function(req,res){

  
    OrderModel.find({}).exec()
       .then(mealplans => res.status(200).json(mealplans))
       .catch(error => res.status(500).json({
          error: 'Internal server error',
          message: error.message
       }))
})

module.exports = router;
// router.get('/eat/subscribe',async function(req,res){
     
//       var mealsess = req.query.session;
//       MealPlan.find({mealsession:mealsess}).exec()
//          .then(mealplans => res.status(200).json(mealplans))
//          .catch(error => res.status(500).json({
//             error: 'Internal server error',
//             message: error.message
//          }))
// })
