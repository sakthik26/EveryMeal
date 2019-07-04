"use strict";

const port = process.env.EM_PORT;
const mongoURI = process.env.EM_MONGOURI;
const JwtSecret = process.env.EM_JWTSECRET;

module.exports = {
    port,
    mongoURI,
    JwtSecret,
};