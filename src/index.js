require('dotenv').config();

const express = require('express');
const routes = require('./routes');

// eslint-disable-next-line no-unused-vars
const { error } = require('./services/logger');
const middleware = require('./middleware');

const { PORT } = process.env;
const app = express();

app.use(middleware, routes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
