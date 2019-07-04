"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
//const helmet     = require('helmet');

const middlewares = require('./middlewares');

//const auth  = require('./routes/auth');
const otherMealData = require('./routes/otherMeals');

const api = express();

//api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);


api.get('/',(req,res) => {
    res.json({
        name: 'EveryMeal backend'
    })
});

//api.use('/api/v1/auth', auth);
api.use('/api/v1/othermeals',otherMealData)

module.exports = api;