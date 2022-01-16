const weather = require('../utils/weather-api');

const forecast = (req, res, callback) => {
    let { address, includes } = req.query;
    //days,hours,alerts,current
    if (!includes) {
        includes = 'current'
    }
    else{
        includes += ',current'
    }
    
    if (!address) {
        return callback({
            location: address,
            error: 'You must provide address to get the weather conditions'
        });
    }

    weather.weather({
        inLocation: address,
        inIncludes: includes,
        callback: (error, response) => {

            if (error) {
                response = {
                    error:error
                };
                
            }
            else {
                const { temp, conditions } = response.currentConditions;
                response.forecast = `The current temprature is ${temp} and the environment is ${conditions}`;
            }

            response.location = address;
            callback(response);
        }
    });
}


module.exports = {
    forecast
};