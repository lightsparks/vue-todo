const app = new Vue({
    el: '#app',
    data: {
        title: "To-do list",
        todos: [],
        newTodo: '',
        message: 'No tasks to do!',
        smiley: ' 😊 '
    },

    methods: {
        addTodo: function () {
            if (this.newTodo == 0) {
                return;
            }
            this.todos.push({
                title: this.newTodo,
                done: false,
            });
            this.newTodo = '';
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        clearList() {
            if (confirm("Do you really want all list items cleared?")) {
                this.todos.splice(0, this.todos.length);
            };
        },
    },

    mounted() {
        if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
    },

    watch: {
        todos: {
            handler() {
                localStorage.setItem('todos', JSON.stringify(this.todos));
            },
            deep: true,
        },
    },
});

/* todo: push item van pending naar completed */
/* todo: deadline */
/* todo: speed up CSS */