/**
 * Main application file
 */

const express = require('express');
const http = require('http');

// New line
const mongoose = require('mongoose');
const expressConfig = require('./config/express');

// Add this line
const routeConfig = require('./routes');

// Add this line mongooes

const config = require('./config/environment');

// Connect to MongoDB
mongoose.connect(config.mongo.uri, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.error('Error', 'MongoDB connection error', {
    data: err,
    time: new Date().toISOString(),
  });
  process.exit(-1);
});

// Setup server
const app = express();
const server = http.createServer(app);

// New line
expressConfig(app);

// Add this line
routeConfig(app);

// const config = {
//   port: 8080,
//   ip: '127.0.0.1',
// };


// Start server
function startServer() {
  app.shoppingCartBK = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}

setImmediate(startServer);

// Expose app
module.exports = app;