const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //37.8267,-122.4233
    const url = 'https://api.darksky.net/forecast/7840032c3f51b12fe28a9ad7af18a1d6/' + latitude + ',' + longitude + '?units=si'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast