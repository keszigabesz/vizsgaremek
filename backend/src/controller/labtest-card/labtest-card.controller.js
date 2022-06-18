const Test = require('../../model/labtest');
const service = require('../base/base.service');
const createError = require('http-errors');


exports.findAll = (req, res, next) => {
    return service.findAll(Test)
        .then(list => res.json(list));
};
