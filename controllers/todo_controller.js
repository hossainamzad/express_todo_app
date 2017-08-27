const Todo = require('../models/todo');
const todoController = {};
todoController.index = function (req, res) {
  Todo.findAll()
  .then(function(todos) {
    res.json({
      message: 'ok',
      data: todos,
    });
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  })
};

todoController.show = function (req, res) {
  Todo.findById(req.params.id)
  .then(function(todos) {
    res.json({
      message: 'ok',
      data: todos,
    });
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  })
};

module.exports = todoController;
