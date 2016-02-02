/**
 * @name Database Setup
 * @file db.js
 * @description Provides MySQL connection pool for app
 * @author Sam Reaves
 * @date December 5, 2015
 */

// Require mysql from node modules
var	mysql = require('mysql'),
	config = require('./config');

//Set up connection pool limited to 100 connections
var pool      =    mysql.createPool({
    connectionLimit : 100, 
    host     : 'mysql',
    user     : config.user,
    password : config.password,
    port     : '3306',
    database : 'brnr',
    debug    :  false
});

// Export the pool
module.exports = pool;