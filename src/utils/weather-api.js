const request = require('request');
const fs = require('fs');
const weatherDataFilePath = './files/weather.json';
let logRequestContent = false;

// const includes = `days,hours,alerts,current`;
// const location = `Dehli`;

const getWeatherData = ({inLocation, inIncludes, callback}) => {
    const includes = encodeURIComponent(inIncludes);
    const location = encodeURIComponent(inLocation);
    const key = `R3JG7UKDFRNJL9N7FLS3FYZFL`;
    const unitGroup = `metric`;
    const contentType = `json`;
    let errorMessage = undefined;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&include=${includes}&key=${key}&contentType=${contentType}`;
    console.log(url);
    console.log('Waiting for response...');

    request({
        url: url,
        json: true
    }, (error, response) => {
        console.log('Processing response');
        if (error) {
            errorMessage = `Unable to connect.\nError No: ${error.errno}\nError Code: ${error.code}`;
            if (callback)
                callback(errorMessage);
            else
                console.error(errorMessage);
        }
        else if (typeof (response.body) === 'string') {
            errorMessage = response.body;
            if (callback)
                callback(errorMessage);
            else
                console.error(errorMessage);
        }
        else {
            if (logRequestContent)
                fs.writeFile(weatherDataFilePath, JSON.stringify(response.body), () => console.info('The file have been saved successfully'));

            if (callback) {
                callback(errorMessage, response.body);
            }
        }

        console.log('Processing response is completed');
    });
};

const logRequest = (log) => logRequestContent = log;

module.exports = {
    weather: getWeatherData,
    log: logRequest
};