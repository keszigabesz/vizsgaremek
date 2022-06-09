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

exports.create = (req, res, next) => {
    const { name, taj, birth_date, mothers_name} = req.body;
    if (!taj || !name || !birth_date || !mothers_name) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newPatient = {
        name: name,
        taj: taj,
        birth_date: birth_date,
        mothers_name: mothers_name
    };

    
    const patient = new Patient(newPatient);

    return service.create(patient)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { name, taj, birth_date,  mothers_name} = req.body;
    if (!taj || !name || !birth_date || !mothers_name) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        name: name,
        taj: taj,
        birth_date: birth_date,
        mothers_name: mothers_name
    };
    return service.update(Patient, req.params.id, update)
        .then(patient => {
            res.json(patient);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};


exports.delete = (req, res, next) => {
    return service.delete(Patient, req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
