// server.js

// server.js sets up the Express application, specifies the API routes, and starts the server to listen for incoming requests.

// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const apiRoutes = require('./routes/api');

// server config
let config = {
    name: 'melissa-everyrealm-burrito-api',
    port: 3000,
    host: '0.0.0.0',
};

// create object for express application
const app = express();
const orders = {};

// logger config
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

// tells Express to use the routes defined in the apiRoutes module when the path starts with '/api'.
app.use('/api', apiRoutes);

// starts the Express server and logs out the server config
if (process.env.NODE_ENV != 'test') {
    app.listen(config.port, config.host, (e) => {
        if (e) {
            throw new Error('Internal Server Error');
        }
        logger.info(`${config.name} running on ${config.host}:${config.port}`);
    });
}

module.exports = { app, orders };
