export const todoModule = {
    state: {
        todos: {}
    },
    mutations: {
        setTodos (state, todos) {
            state.todos = todos;
        },
        updateTodo (state, selectedTodo) {
            state.todos = state.todos.map(todo => todo.id === selectedTodo.id ? selectedTodo : todo);
        },
        removeTodo (state, selectedTodo) {
            state.todos = state.todos.filter(todo => todo.id !== selectedTodo.id);
        }
    },
    getters: {
        getTodos: state => {
            return state.todos;
        }
    }
};
