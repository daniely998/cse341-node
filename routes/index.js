const routes = require('express').Router();
const controllers = require('../controllers/index');

routes.get('/', controllers.aRoute);

module.exports = routes;