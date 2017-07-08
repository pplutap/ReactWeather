var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?q=';
const END_URL = '&units=metric&appid=a0a64737ddb3a38fc906911b9036aedd';
module.exports = {
    getTemp: function (location) {
        var encodeLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodeLocation}${END_URL}`;

        return axios.get(requestUrl).then(function (success) {
            if (success.data.cod && success.data.message && success.data.list.length > 0) {
                return success.data.list[0].main.temp;
            } else {
                throw new Error(success.data.message);
            }
        }, function (error) {
            throw new Error(error.data.message);
        });
    }
};