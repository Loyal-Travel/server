'use strict';
const route = require('express').Router();
const weather = require('./weather');

route.use('/weather', weather);

module.exports = route;