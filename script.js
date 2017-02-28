var todoList = {
    todos: ['item 1', 'item 2', 'itemy 3'],
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    addTodo: function(todo) {
      this.todos.push(todo);
      this.displayTodos();
    }
};
