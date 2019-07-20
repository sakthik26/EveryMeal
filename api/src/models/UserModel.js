// const config = require('config');
// const jwt =  require('jsonwebtoken');
// const joi = require('joi');
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//      firstname:{
//          type: String,
//          required: true,
//          minlength: 3,
//          maxlength: 50
//      },
//      lastname:{
//         type: String,
//         required: true,
//         minlength: 3,
//         maxlength: 50
//     },
//      email: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 255,
//         unique: true
//       },
//       password: {
//         type: String,
//         required: true,
//         minlength: 3,
//         maxlength: 255
//       },
//       isAdmin: Boolean
// })

// userSchema.methods.generateAuth = function(){
//     const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin},config.get('myprivatekey'));
//     return token;
// }

// const User = mongoose.model('User',userSchema);

// function validateUser(user){
//     const schema = {
//         firstname: joi.string().min(3).max(50).required(),
//         lastname: joi.string().min(3).max(50).required(),
//         email: joi.string().min(5).max(255).required().email(),
//         password: joi.string().min(3).max(255).required()
//     };

//     return joi.validate(user,schema);
// }

// exports.User = User;
// exports.validate = validateUser;

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtKey = process.env.EM_JWTSECRET;

const userSchema = mongoose.Schema({
    firstname:{
         type:String,
         required: true,
         trim:true,
         minlength: 3,
         maxlength: 50
    },
    lastname:{
        type:String,
        required: true,
        trim:true,
        minlength: 3,
        maxlength: 50
    },
    email:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        validate: value =>{
            if(!validator.isEmail(value)){
                throw new Error({error: 'Invalid Email Address'})
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength: 8
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

    
})

userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next();
})

userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({_id:user._id},jwtKey)
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}

userSchema.statics.findByCredentails = async function(email,password){
    
    
        const user = await User.findOne({email})
        if(!user){
            throw new Error({error:'Invalid login Credentials'})
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            throw new Error({error:'Invalid Password'})
        }
        return user;
  
}

const User = mongoose.model('User',userSchema)

module.exports = User;
