/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todos;
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(index) {
    if (index > this.todos.length || index < 0) {
      return null;
    }
    this.todos = this.todos.filter((val, i) => i != index);
  }
  clear() {
    this.todos = [];
  }
  getAll() {
    return this.todos;
  }
  get(index) {
    if (index > this.todos.length - 1 || index < 0) {
      return null;
    }
    return this.todos[index];
  }
  update(index, newVal) {
    if (index > this.todos.length - 1 || index < 0) {
      return;
    }
    this.todos[index] = newVal;
  }
}
module.exports = Todo;
