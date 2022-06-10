const express = require('express');
const controller = require('./statistic.controller');

const router = express.Router();

router.get('/patient-count', (req, res, next) => {
  return controller.countPatient(req, res, next);
});
router.get('/physician-count', (req, res, next) => {
  return controller.countPhysician(req, res, next);
});
router.get('/reagent-count', (req, res, next) => {
  return controller.countReagent(req, res, next);
});
router.get('/sample-count', (req, res, next) => {
  return controller.countSample(req, res, next);
});
router.get('/test-count', (req, res, next) => {
  return controller.countTest(req, res, next);
});

router.get('/city-count', (req, res, next) => {
  return controller.countCity(req, res, next);
});

module.exports = router;