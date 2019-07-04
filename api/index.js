"use strict";

const http       = require('http');
const mongoose   = require('mongoose');

const api        = require('./src/api');
const config     = require('./src/config');

api.set('portt',config.port);

const server = http.createServer(api);

mongoose
    .connect(config.mongoURI)
    .then(() => server.listen(config.port))
    .catch(err => {
        console.log('Error connectiong to the database', err.message);
        process.exit(err.statusCode);
    });

server.on('listening', () => {
    console.log(`API is running on port ${config.port}`);
});

server.on('ereror', (err) => {
    console.log('Error in the server', err.message);
    process.exit(err.statusCode)
});