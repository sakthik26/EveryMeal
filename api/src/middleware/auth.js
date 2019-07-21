const jwt = require('jsonwebtoken');
const User = require('../models/UserModel')

const jwtKey = process.env.EM_JWTSECRET;

const auth = async function(req,res,next){
   const token = req.header('Authorization') !== undefined ? req.header('Authorization').replace('Bearer ','') : '';
   if(!token) return res.status(401).send({error:'Not authorized to access this resource'})
  
    jwt.verify(token,jwtKey, async function (err, data){
    if (err){
        res.status(401).send({error:'Not authorized to access this resource'})
    }
    else {
        const user = await User.findOne({_id: data._id,'tokens.token':token})
        if(!user){
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    }
  })
       

}
module.exports = auth