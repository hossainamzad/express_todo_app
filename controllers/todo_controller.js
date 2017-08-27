const Todo = require('../models/todo');
const todoController = {};
// to show all todo items
todoController.index = function (req, res) {
  Todo.findAll()
  .then(function(todos) {
    res.render('todo/index', {
      message: 'ok',
      data: todos,
    });
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  })
};
// to show one todo item
todoController.show = function (req, res) {
  Todo.findById(req.params.id)
  .then(function(todos) {
    res.render('todo/todo_single', {
      message: 'ok',
      data: todos,
    });
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  })
};
// to create one todo item
todoController.create = function (req, res){
  Todo.create({
    title: req.body.title,
    category: req.body.category,
    status: req.body.status,
  }).then(function(todo){
    res.redirect('/todo');
  }).catch(function (err){
    console.log(err);
    res.status(500).json(err);
  });
};

// to delete one todo item.
todoController.delete = function (req, res){
  Todo.destroy(req.params.id)
    .then(function () {
      res.redirect('/todo');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = todoController;
