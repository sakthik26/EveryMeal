import { Mongoose } from 'mongoose';

const mongoose = require('mongoose');

mongoogse.connect(process.env.MONGODB_URL,{useNewUrlParser: true,
    useCreateIndex: true})
    .then(()=>{console.log('Connected to Mongo DB')})
    .error(err=>{console.error("Couldn't connect to Mongo DB")});


