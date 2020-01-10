"use strict"

const route = require('express').Router()
const zenserpControllers = require('../controllers/zenserp')

route.get('/search/:nameLocation', zenserpControllers.getLocation)

module.exports = route