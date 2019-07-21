const mongoose = require('mongoose')

const info = mongoose.Schema({
    productID:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!value.match(/^[0-9a-fA-F]{24}$/)) {
                throw new Error("userID is not valid")
            }
        }
    },
    quantity:{
        type: Number,
        required: true,
        min: [1, "Must order at least one"],
        max: [4, "Quantity not available"]
    },
    portionSize:{
        type: Number,
        required: true,
        min: 0.5,
        max: 1,
        validate(value) {
            if(value<0.5 || value>1){
                throw new Error("Portion size not available")
            }
        }
    },
    additionalComments:{
        type: String,
        trim: true,
        maxlength: [500, "Character limit is 500"],
        default: ""
    }
})

const shoppingCartSchema = mongoose.Schema({
    userID:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!value.match(/^[0-9a-fA-F]{24}$/)) {
                throw new Error("userID is not valid")
            }
        }
    },
    mealInfo:[info],
    dateAdded:{
        type: Date,
        required: true
    }
    

})


const ShoppingCart = mongoose.model('ShoppingCart',shoppingCartSchema)

module.exports = ShoppingCart;