// require express for the routes.
const express = require('express');
// call Router method on express
const router = express.Router();
// import todoController into the routes file.
const todoController = require('../controllers/todo_controller');

// create a route to see all todo items. when we go to
// '/', we are calling the controller action for findAll
// todos actions.
router.get ('/', todoController.index);
router.get ('/:id', todoController.show);


module.exports = router;
