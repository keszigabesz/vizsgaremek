const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const { host, user, pass } = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass,
}).then(conn => console.log('Mongo DB connection successfull!'))
    .catch(err => {
        throw new Error(err.message);
    });





module.exports = app;