'use strict'

const routes = require('express').Router()
const foursquareAPIController = require('../controllers/foursquare-api');

routes.get('/:city', foursquareAPIController.getVenues)

module.exports = routes