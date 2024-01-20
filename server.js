// server.js

// server.js sets up the Express application, specifies the API routes, and starts the server to listen for incoming requests.

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// Import API routes
const apiRoutes = require('./routes/api');

// Server config
let config = {
    name: 'melissa-everyrealm-burrito-api',
    port: 3000,
    host: '0.0.0.0',
};

// Create object for the Express application
const app = express();
const orders = {};

// Logger config
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

// Tell Express to use the routes defined in the apiRoutes module when the path starts with '/api'.
app.use('/api', apiRoutes);

// Start the Express server and log out the server config
if (process.env.NODE_ENV !== 'test') {
    app.listen(config.port, config.host, (e) => {
        if (e) {
            throw new Error('Internal Server Error');
        }
        logger.info(`${config.name} running on ${config.host}:${config.port}`);
    });
}

module.exports = { app, orders };
