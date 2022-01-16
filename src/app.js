const express = require('express');
const config = require('./appconfig');
const routes = require('./routes');
const server = require('./server');


const app = express();//This must be unique across all the modules
config.config(app);

routes.routes(app);
server.start(app);


