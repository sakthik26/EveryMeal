"use strict";

const mongoose = require('mongoose');

const OtherMealSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    type: String,
    description: String,
    macronutrients: {
        carbs: {
            type: Number,
            required: true},
        fats: {
            type: Number,
            required: true
        },
        proteins: {
            type: Number,
            required: true
        }
    },
    micronutrients: {
        calcium: Number,
        selenium: Number,
        iron: Number
    }
})

OtherMealSchema.set('versionKey', false);
OtherMealSchema.set('timestamps', true);


module.exports = mongoose.model('OtherMeal', OtherMealSchema);