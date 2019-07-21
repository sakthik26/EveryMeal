const express  = require('express');
const router   = express.Router();
const auth = require('../middleware/auth')

//const middlewares    = require('../middlewares');
const DashboardMealController = require('../controllers/DashboardMeals');

router.get('/dashboard/meals/:user_id/', DashboardMealController.list); // List all meals
router.post('/dashboard/meals/', /*middlewares.checkAuthentication, */ DashboardMealController.create); // Create a new meal
router.get('/dashboard/meals/:id', DashboardMealController.read); // Read a meal by Id
router.put('/dashboard/meals/:id', /*middlewares.checkAuthentication, */ DashboardMealController.update); // Update a meal by Id
router.delete('/dashboard/meals/:id', /*middlewares.checkAuthentication, */ DashboardMealController.remove); // Delete a meal by Id

module.exports = router;