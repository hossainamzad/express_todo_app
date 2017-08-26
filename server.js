// importing all the dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
// initantiate the app
const app = express();

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;

// tell the app where to serve
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// index route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
