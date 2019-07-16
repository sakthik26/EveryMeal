// const jwt = require('jsonwebtoken');
// const config =  require('config');

// module.exports = function(req,res,next){

//     const token = req.headers["x-access-token"] || req.headers["authorization"];

//     if (!token) return res.status(401).send("Access denied. No token provided.");

//         try{
//             const decoded = jwt.verify(token, config.get('myprivatekey'));
//             req.user = decoded;
//             next();
//         } catch(e){
//             res.status(400).send('Invalid token');
//         }
//  }

const jwt = require('jsonwebtoken');
const User = require('../models/UserModel')

const auth = async function(req,res,next){
   const token = req.header('Authorization') !== undefined ? req.header('Authorization').replace('Bearer ','') : '';
   if(!token) return res.status(401).send({error:'Not authorized to access this resource'})
   const data = jwt.verify(token,process.env.JWT_KEY);
   try{
       const user = await User.findOne({_id: data._id,'tokens.token':token})
       if(!user){
           throw new Error()
       }
       req.user = user
       req.token = token
       next()
   }
   catch(error){
       res.status(401).send({error:'Not authorized to access this resource'})
   }

}
module.exports = auth