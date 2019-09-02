/**
 * Main application routes
 */

// Import Endpoints
const helloWorld = require('./api/helloworld');
// New Line
const product = require('./api/product');

module.exports = (app) => {
  app.use('/api/helloworld', helloWorld);
  // New line
  app.use('/api/products', product);
};
