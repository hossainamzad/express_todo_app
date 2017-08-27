// importing all the dependencies
const express = require('express');
// looger logs out the requests.
const logger = require('morgan');
const path = require('path');
// body-parser is needed for the post action
const bodyParser = require('body-parser');
// method overrides help app delete things.
const methodOverride = require('method-override');
// initantiate the app
const app = express();
// import todo_routes.js here to use for the app.
const router = require('./routes/todo_routes');

// middlewares.
app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;

// tell the app where to serve
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// index route
// app.get('/', (req, res) => {
//     res.send('Hello world!');
// });

// Our welcome route!
 app.get('/', (req, res) => {
   res.render('welcome', { message : "Hello from welcome."});
 });
// todo routes
app.use('/todo', router);
// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
