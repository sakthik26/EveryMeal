const express = require('express');
const router = express.Router();

const ShoppingCart = require('../models/ShoppingCartModel');


router.post('/eat/cart', async function(req,res){

    try{
        const shoppingCart = new ShoppingCart(req.body);
        await shoppingCart.save();
        res.status(201).send({shoppingCart})
    }
    catch(error){
      res.status(400).send(error)
    }
})

router.get('/eat/cart/:id', async function(req,res){
    
    var shoppingCartId = req.params.id;
    ShoppingCart.find({_id:shoppingCartId}).exec()
       .then(shoppingCartInfo => res.status(200).json(shoppingCartInfo))
       .catch(error => res.status(500).json({
          error: 'Internal server error',
          message: error.message
       }))
})

module.exports = router;