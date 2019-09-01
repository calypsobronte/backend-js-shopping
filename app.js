/**
 * Main application file
 */

const express = require('express');
const http = require('http');

// New line
const expressConfig = require('./config/express');

// Add this line
const routeConfig = require('./routes');

// Setup server
const app = express();
const server = http.createServer(app);

// New line
expressConfig(app);

// Add this line
routeConfig(app);

const config = {
  port: 8080,
  ip: '127.0.0.1',
};

// Start server
function startServer() {
  app.shoppingCartBK = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}

setImmediate(startServer);

// Expose app
module.exports = app;
