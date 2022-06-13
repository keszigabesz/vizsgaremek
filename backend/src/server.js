const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./config/logger');

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
        logger.info('MongoDB connection has been established successfully.');
        // require('./seeder/seeder');
        // logger.info('Database is seeded');
    })
    .catch(err => {
        logger.error(err);
        process.exit();
    });

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/patient', require('./controller/patient/patient.router'));
app.use('/physician', require('./controller/physician/physician.router'));
app.use('/reagent', require('./controller/reagent/reagent.router'));
app.use('/sample', require('./controller/sample/sample.router'));
app.use('/test', require('./controller/test/test.router'));
app.use('/test-card', require('./controller/test/test.router'));
app.use('/statistic', require('./controller/statistic/statistic.router'));
app.use('/login', require('./controller/login/login.router'));

app.use((err, req, res, next) => {
    console.error(`ERROR ${err.statusCode}: ${err.message}`);
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});




module.exports = app;