/**
 * @name Database Setup
 * @file db.js
 * @description Provides MySQL connection pool for app
 * @author Sam Reaves
 * @date December 5, 2015
 */

// Require mysql from node modules
var	mysql = require('mysql');

//Set up connection pool limited to 100 connections
var pool      =    mysql.createPool({
    connectionLimit : 100, 
    host     : 'mysql',
    user     : 'admin',
    port     : '3306',
    password : 'admin',
    database : 'brnr',
    debug    :  false
});

console.log("pool: ", pool);

// Export the pool
module.exports = pool;