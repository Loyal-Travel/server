'use strict';
const route = require('express').Router();

route.get('/test', (req, res, next) =>  res.status(200).json({ message: 'ok' }));

module.exports = route;