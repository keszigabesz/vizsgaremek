const Physician = require('../../model/physician');
const service = require('../base/base.service');
const createError = require('http-errors');
const physician = require('../../model/physician');


exports.findAll = (req, res, next) => {
    return service.findAll(Physician)
        .then(list => res.json(list));
};

exports.findOne = (req, res, next) => {
    return service.findOne(Physician, req.params.id)
        .then( physician => {
            if (!physician) {
                return next(new createError.NotFound("Physician is not found"));
            }
            return res.json(physician);
        });
};

exports.create = (req, res, next) => {
    const { name, reg_number,  city } = req.body;
    if (!name || !reg_number || !city) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newPhysician = {
        name: name,
        reg_number: reg_number,
        city: city
    };

    
    

    return service.create(Physician, newPhysician)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { name, reg_number,  city} = req.body;
    if (!name || !reg_number || !city) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        name: name,
        reg_number: reg_number,
        city: city
    };
    return service.update(Physician, req.params.id, update)
        .then(physician => {
            res.json(physician);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};


exports.delete = (req, res, next) => {
    return service.delete(Physician, req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
