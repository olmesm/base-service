const routes = require('express').Router();

routes.get('/status', (req, res) => res.status(200).send('OK'));
routes.get('/', (req, res) => res.send('Hello World!'));

module.exports = routes;
