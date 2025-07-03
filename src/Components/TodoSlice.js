import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlice = createSlice ({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action ) => {
            state.action.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1)
        },
        toggledTodo: (state, action) => {
            const todo = state.todos[action.payload]
            if(todo) {
                todo.completed = ! todo.completed
            }
        }
    }
})

export const {addTodo, deleteTodo, toggledTodo} = todoSlice.actions;
export default todoSlice.reducer