const Patient = require('../../model/patient');
const service = require('../base/base.service');
const createError = require('http-errors');


exports.findAll = (req, res, next) => {
    return service.findAll(Patient)
        .then(list => res.json(list));
};

exports.findOne = (req, res, next) => {
    return service.findOne(Patient, req.params.id)
        .then( person => {
            if (!person) {
                return next(new createError.NotFound("Person is not found"));
            }
            return res.json(person);
        });
};
