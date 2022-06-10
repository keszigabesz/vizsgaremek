const Patient = require('../../model/patient');
const Physician = require('../../model/physician');
const Reagent = require('../../model/reagent');
const Sample = require('../../model/sample');
const Test = require('../../model/test');
const statService = require('./statistic.service');

const service = require('../base/base.service');

exports.countPatient = async (req, res, next) => {
    return statService.count(Patient)
        .then(count => res.json(count));
};
exports.countPhysician = async (req, res, next) => {
    return statService.count(Physician)
        .then(count => res.json(count));
};
exports.countReagent = async (req, res, next) => {
    return statService.count(Reagent)
        .then(count => res.json(count));
};
exports.countSample = async (req, res, next) => {
    return statService.count(Sample)
        .then(count => res.json(count));
};
exports.countTest = async (req, res, next) => {
    return statService.count(Test)
        .then(count => res.json(count));
};
exports.countCity = async (req, res, next) => {
    const array = await service.findAll(Physician)
    let city = [];
    array.forEach(item => {
        city.push(item.city);

    });
    const distinct = [...new Set(city)]
    res.json(distinct.length)
}