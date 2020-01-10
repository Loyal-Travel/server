'use strict';
const axios = require('axios');

class Weather {
  static getInfo(req, res, next) {
    const { city } = req.params;
    const responseData = {};
    axios({
      method: 'get',
      // url: `http://api.weatherstack.com/current?access_key=a25b9a531c30d174506175f9283d45e3&query=${city}`,
      url: `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=t33TrtBzeY69mhHkTMgGqj8G65hsSFVC&q=${city}`,
    })
    .then(({ data }) => {
      const { Key, Region, Country, AdministrativeArea, TimeZone, EnglishName } = data[0]
      responseData.cityKey = Key;
      responseData.timeZone = { name: TimeZone.Name, GMT: TimeZone.GmtOffset }
      responseData.area = `${EnglishName}, ${AdministrativeArea.EnglishName}, ${Country.LocalizedName}`
      responseData.region = Region.EnglishName
      return responseData;
    })
    .then((searchData) => {
      const { cityKey } = searchData
      axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=t33TrtBzeY69mhHkTMgGqj8G65hsSFVC`
      })
      .then(({ data }) => {
        const weatherInfo = {};
        weatherInfo.headline = data.Headline.Text;
        weatherInfo.category = data.Headline.Category;
        weatherInfo.forecast = [];
        data.DailyForecasts.forEach(daily => {
          const info = {
            date: daily.Date,
            temperature: {
              min: `${daily.Temperature.Minimum.Value} ${daily.Temperature.Minimum.Unit}`,
              max: `${daily.Temperature.Maximum.Value} ${daily.Temperature.Maximum.Unit}`,
            },
            day: { type: daily.Day.PrecipitationType, intensity: daily.Day.PrecipitationIntensity },
            night: { type: daily.Night.PrecipitationType, intensity: daily.Night.PrecipitationIntensity },
            source: daily.Source,
          }
          weatherInfo.forecast.push(info);
        });
        responseData.weatherInfo = weatherInfo;
        res.status(200).json({responseData});
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
};

module.exports = Weather;