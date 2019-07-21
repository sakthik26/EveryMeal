const express = require('express');
const router = express.Router();

const Meal = require('../models/MealModel');


router.post('/eat/eatnow', async function(req,res){

    try{
        const meal = new Meal(req.body);
        await meal.save();
        res.status(201).send({meal})
    }
    catch(error){
      res.status(400).send(error)
    }
})

router.get('/eat/eatnow', async function(req,res){
    var mealsess = req.query.session;
    Meal.find({mealSession:mealsess}).exec()
       .then(meal => res.status(200).json(meal))
       .catch(error => res.status(500).json({
          error: 'Internal server error',
          message: error.message
       }))
})

router.get('/eat/eatnow/mealpage/:id', async function(req,res){
    
    var mealId = req.params.id;
    Meal.find({_id:mealId}).exec()
       .then(mealInfo => res.status(200).json(mealInfo))
       .catch(error => res.status(500).json({
          error: 'Internal server error',
          message: error.message
       }))
})



module.exports = router;