/**
 * @name Docker-MySQL Server
 * @file app.js
 * @description Initializes server. 
 * @author Sam Reaves
 * @date December 5th, 2015
 */

// Import Express and initialize server.
var express = require('express'),
	app = module.exports.app = exports.app = express(),
	logger = require("./logger"),
	body_parser = require('body-parser'),
	db = require("./db"),
	routes = require("./routes"),
	server,
	host,
	port;

// Fuck off with your nonsense header
app.disable('x-powered-by');

// Use body parser to parse both application/json and application/x-www-form-urlencoded
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

// Remind us that we're using our own Winston logger
logger.debug("Overriding 'Express' logger");

// Include routes
app.use(routes);

// Server starts listening on port 3000.
server = app.listen(3000, function() {

	host = server.address().address,
  	port = server.address().port;

  	// Logs a message to let dev know we're up and running.
  	logger.info('Example app listening at http://%s:%s', host, port);
});

// Export the server for testing
module.exports = server;