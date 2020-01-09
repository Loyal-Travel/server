'use strict';
const route = require('express').Router();
const zenserpRouter = require('./zenserp')

route.get('/test', (req, res, next) => res.status(200).json({ message: 'ok' }));
route.use('/zenserp', zenserpRouter)

module.exports = route;