import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodos: (state, action) => {
            state.todos.push({text: action.payload, completed: false});

        },

        toggleTodo: (state, action) => {
            const todo = state.todos[action.payload];
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action) =>{
            state.todos.splice(action.payload, 1)
        },
    },
})

export const {addTodos, toggleTodo, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer