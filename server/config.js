/**
 * @name Docker-MySQL Config
 * @file config.js
 * @description Holds app configuration variables. 
 * @author Sam Reaves
 * @date December 29th, 2015
 */

module.exports = {
	user: process.env.DB_USER || 'berner',
	password: process.env.DB_PASSWORD || 'weateatcafedalsaceinvietnaam'
}