// import database from the config file. we need
// pg-promise to be imported here.
const db = require('../db/config');
const Todo = {};
// create a method to find all the todo itmes from the list
Todo.findAll = function () {
  return db.query('SELECT * FROM todo_names');
}
Todo.findById = function(id){
  return db.oneOrNone(`
    SELECT * FROM todo_names
    WHERE id = $1
    `, [id]);
}
Todo.create = function (todo) {
  return db.one(`
    INSERT INTO todo_names
    (title, category, status)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [todo.title, todo.category, todo.status]);
}
Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todo_names
    WHERE id = $1
  `, [id]);
}
module.exports = Todo;
