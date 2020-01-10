'use strict';
const route = require('express').Router();
const controller = require('../controllers/weather');

route.get('/:city', controller.getInfo);

module.exports = route;