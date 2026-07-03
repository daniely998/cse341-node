const routes = require('express').Router();
const controller = require('../controllers/index');

routes.get('/', controller.aRoute);

module.exports = routes;