import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodos: (state, action) => {
            state.todos.push({text: action.payload, completed: false})
        },
        deleteTodos: (state, action) => {
            state.todos.splice(action.payload, 1)
        },
        toggledTodos: (state, action) => {
            const todo = state.todos[action.payload]
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }
})

export const { addTodos, deleteTodos, toggledTodos} = todoSlice.actions;
export default todoSlice.reducer