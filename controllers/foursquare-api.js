'use strict'

const axios = require('axios').default

const foursquareClientId = process.env.FOURSQUARE_CLIENT_ID
const foursquareClientSecret = process.env.FOURSQUARE_CLIENT_SECRET

class FoursquareAPI {
    static getVenues = (req, res, next) => {
        axios.get(`https://api.foursquare.com/v2/venues/explore?near=${req.params.city}&client_id=${foursquareClientId}&client_secret=${foursquareClientSecret}&v=20200101`)
            .then(({ data }) => {
                const venues = []
                data.response.groups[0].items.forEach(element => {
                    venues.push(element.venue)
                });
                res.status(200).json({
                    city: {
                        name: data.response.geocode.displayString,
                        lat: data.response.geocode.center.lat,
                        lng: data.response.geocode.center.lng,
                    },
                    venues


                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = FoursquareAPI