'use strict'

const route = require('express').Router()
const foursquareAPIRoute = require('./foursquare')
const zenserpRouter = require('./zenserp')
const weather = require('./weather');

route.use('/foursquareAPI', foursquareAPIRoute)
route.use('/weather', weather);
route.use('/zenserp', zenserpRouter)

module.exports = route