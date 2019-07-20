const mongoose = require('mongoose');

const DashboardMeals = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    type: String,
    description: String,
    calories: {
        type: Number,
        required: true
    },
    macronutrients: {
        carbs: Number,
        fats: Number,
        proteins: Number
    },
    micronutrients: {
        calcium: Number,
        selenium: Number,
        iron: Number
    }
})

DashboardMeals.set('versionKey', false);
DashboardMeals.set('timestamps', true);


module.exports = mongoose.model('DashboardMeals', DashboardMeals);