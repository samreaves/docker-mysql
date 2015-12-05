/**
 * @name Docker-MySQL Server Routes
 * @file routes.js
 * @description Provides server endpoints. 
 * @author Sam Reaves
 * @date December 5th, 2015
 */

// Import Express and initialize server.
var express = require('express'),
	routes = express.Router(),
	product_model = require('./model');


// Respond with something simple at root
routes.get('/', function(req, res) {
  res.status(200).send("Hello, Sam");
});

// On products endpoint
routes.get('/products', function(req, res) {

	// Grab all products
	product_model.getAllProducts().then(function(products) {
		
		// If products don't exist
		if (!products) {

			// Send error
			res.status(500).send("Problem grabbing products");
		}

		// If products exist
		else {

			// Send products
			res.status(200).send(products);
		}
	})
});


// Export the server for testing
module.exports = routes;


