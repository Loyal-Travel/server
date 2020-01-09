'use strict'

const route = require('express').Router()
const foursquareAPIRoute = require('./foursquare')

route.get('/test', (req, res, next) => res.status(200).json({ message: 'ok' }))
route.use('/foursquareAPI', foursquareAPIRoute)

module.exports = route