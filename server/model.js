/**
 * @name Products Model
 * @file products.js
 * @description Provides product model
 * @author Sam Reaves
 * @date November 18, 2015
 */


/*
	Initialization of private cached data
 */

// Initialize express, file system, lodash
var db = require('./db'),
	Q = require('q');
    


/*
	Methods
*/

/**
 * @name getAllProducts
 * @description Provides endpoint to all product data 
 *
 * @returns {array} list_of_products List of product objects
 * 
 * @author Sam Reaves
 * @date November 18, 2015
 */
module.exports.getAllProducts = function() {

	// Create promise
	var deferred = Q.defer();
	
	// Grab connection from database pool
	db.getConnection(function(err, connection) {

		// If error
		if (err) {

			// Release the connection. Reject the promise
			connection !== undefined ? connection.release() : console.log("database exploded");
			deferred.reject("Error in connection to database");
		} 

		// If we're in the clear
		else {

			// Log to server console the connection's thread id
			console.log('connected as id: ', connection.threadId);

			// Grab only username and email from all users in user table
			connection.query('SELECT * FROM products', function(err, products) {
				
				// Release the connection
				connection.release();
				
				// If no error, resolve the products
				if (!err) {
					deferred.resolve(products);
				}
			});
		}

		// On error, reject promise with error
		connection.on('error', function(err) {
			deferred.reject("Problem with database connection");
		})
	})

	// Return promise
	return deferred.promise;
}


/**
 * @name getProduct by ID
 * @description Provides endpoints to product data by ID 
 *
 * @param {integer} product_id Product ID 
 * @returns {object} product Product data object
 * 
 * @author Sam Reaves
 * @date November 18, 2015
 */
module.exports.getProductByID = function(product_id) {

	// Create promise
	var deferred = Q.defer();
	
	// For each product
	db.products.map(function(product) {



		// If this product's id matches product_id, resolve promise, else do nothing
		if (product.id === product_id) deferred.resolve(product);
	})

	// If no match, reject the promise
	deferred.reject();
	

	// Return promise
	return deferred.promise;
}