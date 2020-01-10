'use strict'

const route = require('express').Router()
const foursquareAPIRoute = require('./foursquare')
const weather = require('./weather');

route.use('/foursquareAPI', foursquareAPIRoute)
route.use('/weather', weather);

module.exports = route