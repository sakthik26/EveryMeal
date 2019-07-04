"use strict";

const express  = require('express');
const router   = express.Router();

//const middlewares    = require('../middlewares');
const OtherMealController = require('../controllers/otherMeals');

router.get('/', OtherMealController.list); // List all meals
router.post('/', /*middlewares.checkAuthentication, */ OtherMealController.create); // Create a new meal
router.get('/:id', OtherMealController.read); // Read a meal by Id
router.put('/:id', /*middlewares.checkAuthentication, */ OtherMealController.update); // Update a meal by Id
router.delete('/:id', /*middlewares.checkAuthentication, */ OtherMealController.remove); // Delete a meal by Id

module.exports = router;