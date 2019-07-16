const mongoose = require('mongoose')


const dietaryRestrictions = mongoose.Schema({
    vegan:{
        type: Boolean,
        default: false
    },
    vegetarian:{
        type: Boolean,
        default: false
    },
    paleo:{
        type: Boolean,
        default: false
    },
    diabetes_friendly:{
        type: Boolean,
        default: false
    },
    low_carb:{
        type: Boolean,
        default: false
    },
    gluten_free:{
        type: Boolean,
        default: false
    },
    dairy_free:{
        type: Boolean,
        default: false
    },
    soy_free:{
        type: Boolean,
        default: false
    }
})

const macros = mongoose.Schema({
    calories:{
        type: Number,
        required: true,
        min: 0
    },
    protein:{
        type: Number,
        required: true,
        min: 0
    },
    fat:{
        type: Number,
        required: true,
        min: 0
    },
    carbs:{
        type: Number,
        required: true,
        min: 0
    },
    fibre:{
        type: Number,
        required: true,
        min: 0
    }
})

// function checkFilter(filterArray){
//     // var diets = ["vegan", "vegetarian", "paleo", "gluten_free", "soy_free", "dairy_free", "diabetes_friendly", "low_carb"];
//     // for (i = 0; i < filterArray.length; i++) { 
//     //     // var element = checkFilter[i];
//     //     if(!diets.includes(filterArray[i])){
//     //         throw new Error("The filter array is not valid")
//     //         // console.log(ement)
//     //     }
//     //   }
//     console.log(filterArray.toString());
// }


const mealSchema = mongoose.Schema({
    mealName:{
        type: String,
        required: true,
        trim: true,
        maxlength: 300
    },
    mealImage:{
        type: String,
        required: true
    },
    mealDescription:{
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    mealSession:{
        type: String,
        enum: ['Breakfast', 'Snack', 'Lunch', 'Dinner'],
        required: true
    },
    mealPrice:{
        type: Number,
        required: true,
        min: [0, "Price must be positive"],
    },
    mealOfferPrice:{
        type: Number,
        min: [0, "Price must be positive"]
    },
    portionSize:{
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
    mealQuantity:{
        type: Number,
        required: true,
        default: 1,
        min: [1, "Must order at least one"],
        max: [4, "Quantity not available"],
    },
    mealPlan:{
        type: String,
        enum: ['Vegan', 'Paleo', 'Other'],
        required: true
    },
    additionalComments:{
        type: String,
        trim: true,
        maxlength: [500, "Character limit is 500"],
        default: ""
    },
    dateToList:{
        type: Date,
        required: true
    },
    mealFilter:[dietaryRestrictions],
    mealNutrition:{
        type:[macros],
        validate(value){
            if(value.length < 1){
                throw new Error("MealNutrition field not filled")
            }
        }
    }    
})

const Meal = mongoose.model('Meal',mealSchema)

module.exports = Meal;