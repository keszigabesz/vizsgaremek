const express = require('express');
const controller = require('./labtest-card.controller');
const logger = require('../../config/logger');

const router = express.Router();


router.get('/', (req, res, next) => {
  logger.info('GET /labtest-card');
  return controller.findAll(req, res, next);
});

module.exports = router;