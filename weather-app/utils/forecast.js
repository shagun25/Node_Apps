const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=68efcc162880ec91bd523cecbe3fbb1e&query=' +latitude+","+longitude+ '&units=f'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions+". It is currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out.")
        }
    })
}

module.exports = forecast