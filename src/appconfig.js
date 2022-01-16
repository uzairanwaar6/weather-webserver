const path = require('path');


const config = (app) => {
    const express = require('express');
    const hbs = require('hbs')

    // Express.js Configuration
    app.use(express.static(path.join(__dirname, '../public')));// Setting Public Path Folder

    app.set('view engine', 'hbs')// Setting View Enginer
    app.set('views', path.join(__dirname, '../templates/views'));// Defining View Folder
    hbs.registerPartials(path.join(__dirname, '../templates/partials'));

}


module.exports = {
    config
}