"use strict"

const axios = require('axios')

class zenserpControllers {
    static getLocation(req, res, next) {
        axios
            .get(`https://app.zenserp.com/api/v2/search?q=${req.params.nameLocation}&num=5&tbm=isch&search_engine=google.com&apikey=${process.env.API_ZENSERP}`)
            .then(({ data }) => {
                res.status(200).json(data)
            }).catch((err) => {
                res.json(err)
            });
    }
}

module.exports = zenserpControllers