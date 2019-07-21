// const auth = require('../middleware/auth');
// const bcrypt = require("bcrypt");
// const { User, validate } = require("../models/UserModel");
// const express = require("express");
// const router = express.Router();

// router.get('/home',auth, async(req,res)=>{
//     const user = await User.findById(req.user._id).select('-password');
//     res.send(user);
// })

// router.post('/signup',async(req,res) =>{
//     const {error} = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     let user = await User.findOne({email : req.body.email});
//     if(user) return res.status(400).send('User Already Registered');

//     user = new User({
//         firstname:req.body.firstname,
//         lastname : req.body.lastname,
//         password: req.body.password,
//         email: req.body.email
//     });
//     user.password = await bcrypt.hash(user.password, 10);
//     await user.save();

//     const token = user.generateAuth();
//     res.header("x-auth-token",token).send({
//         _id: user._id,
//         firstname: user.firstname,
//         lastname: user.lastname,
//         email: user.email
//     });
// });

// module.exports = router;

const express = require('express');
const User = require('../models/UserModel')
const auth = require('../middleware/auth')

const router = express.Router();

router.post('/user/signup',async function(req,res){

    try{
        const user = new User(req.body);
        await user.save();
        const token =await user.generateAuthToken();
        res.status(201).send({user,token})
    }
    catch(error){
      res.status(400).send(error)
    }
})

router.post('/user/login',async function(req,res){

    try{
       const {email, password} = req.body;
       const user = await User.findByCredentails(email,password);
       if(!user){
           throw new Error({error:'Login failed! Check authentication credentials'});
       }
       const token = await user.generateAuthToken();
       res.send({user,token})
    }
    catch(error){
       res.status(401).send({error:'Login failed! Check authentication credentials'});
    }
})

router.get('/user/me', auth, async function(req, res) {
    // View logged in user profile
    res.send(req.user)
})

// router.get('/user/eat', auth, async function(req, res) {
//     // View logged in user profile
//     res.send(req.user)
// })

router.post('/user/logout', auth, async function(req,res){
    try{
        req.user.tokens.splice(0,req.user.tokens.length);
        await req.user.save();
        res.send({'Message':'Logged Out Successfully'})
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;