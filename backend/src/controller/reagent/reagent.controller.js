const Reagent = require('../../model/reagent');
const service = require('../base/base.service');
const createError = require('http-errors');


exports.findAll = (req, res, next) => {
    return service.findAll(Reagent)
        .then(list => res.json(list));
};

exports.findOne = (req, res, next) => {
    return service.findOne(Reagent, req.params.id)
        .then(reagent => {
            if (!reagent) {
                return next(new createError.NotFound("Reagent is not found"));
            }
            return res.json(reagent);
        });
};

exports.create = (req, res, next) => {
    const {
        name,
        manufacturer,
        price,
        stock
    } = req.body;
    if (!name || !manufacturer || !price || !stock) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newReagent = {
        name: name,
        manufacturer: manufacturer,
        price: price,
        stock: stock
    };

    return service.create(Reagent, newReagent)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const {
        name,
        manufacturer,
        price,
        stock
    } = req.body;
    if (!name || !manufacturer || !price || !stock) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        name: name,
        manufacturer: manufacturer,
        price: price,
        stock: stock
    };
    return service.update(Reagent, req.params.id, update)
        .then(reagent => {
            res.json(reagent);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};


exports.delete = (req, res, next) => {
    return service.delete(Reagent, req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};