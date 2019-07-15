const express = require('express');
const MealPlan = require('../models/MealPlan')
//const auth = require('../middleware/auth')

const router = express.Router();

router.post('/eat/subscribe/',async function(req,res){

    try{
        const mealPlan = new MealPlan(req.body);
        await mealPlan.save();
        res.status(201).send({mealPlan});
    }
    catch(error){
      res.status(400).send(error);
    }
})

router.get('/eat/subscribe',async function(req,res){
     
      var mealsess = req.query.session;
      MealPlan.find({mealsession:mealsess}).exec()
         .then(mealplans => res.status(200).json(mealplans))
         .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
         }))
})

router.get('/subscription/details/:id',async function(req,res){
     
    var mealPlanId = req.params.id;
    MealPlan.find({_id:mealPlanId}).exec()
       .then(mealPlanInfo => res.status(200).json(mealPlanInfo))
       .catch(error => res.status(500).json({
          error: 'Internal server error',
          message: error.message
       }))
})

// router.post('/user/login',async function(req,res){

//     try{
//        const {email, password} = req.body;
//        const user = await User.findByCredentails(email,password);
//        if(!user){
//            throw new Error({error:'Login failed! Check authentication credentials'});
//        }
//        const token = await user.generateAuthToken();
//        res.send({user,token})
//     }
//     catch(error){
//        res.status(401).send({error:'Login failed! Check authentication credentials'});
//     }
// })

// router.get('/user/me', auth, async function(req, res) {
//     // View logged in user profile
//     res.send(req.user)
// })

// router.get('/user/eat', auth, async function(req, res) {
//     // View logged in user profile
//     res.send(req.user)
// })

// router.post('/user/logout', auth, async function(req,res){
//     try{
//         req.user.tokens.splice(0,req.user.tokens.length);
//         await req.user.save();
//         res.send({'Message':'Logged Out Successfully'})
//     }catch(err){
//         res.status(500).send(err);
//     }
// })

module.exports = router;