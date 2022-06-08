const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const {
    host,
    user,
    pass
} = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
        user,
        pass,
    }).then(conn => {
        console.log('Mongo DB connection successfull!');
        // require('./seeder/seeder');
        // console.log('Database is seeded');
    })
    .catch(err => {
        throw new Error(err.message);
    });

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/patient', require('./controller/patient/patient.router'));




module.exports = app;