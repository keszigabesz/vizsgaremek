const Patient = require('../../model/patient');
const Physician = require('../../model/physician');
const Reagent = require('../../model/reagent');
const Sample = require('../../model/sample');
const Test = require('../../model/test');
const service = require('./statistic.service');

exports.countPatient = async (req, res, next) => {
    return service.count(Patient)
        .then(count => res.json(count));    
};
exports.countPhysician = async (req, res, next) => {
    return service.count(Physician)
        .then(count => res.json(count));    
};
exports.countReagent = async (req, res, next) => {
    return service.count(Reagent)
        .then(count => res.json(count));    
};
exports.countSample = async (req, res, next) => {
    return service.count(Sample)
        .then(count => res.json(count));    
};
exports.countTest = async (req, res, next) => {
    return service.count(Test)
        .then(count => res.json(count));    
};


