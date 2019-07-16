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
    
    Meal.find({}).exec()
       .then(meal => res.status(200).json(meal))
       .catch(error => res.status(500).json({
          error: 'Internal server error',
          message: error.message
       }))
})

module.exports = router;