/*import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
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

export const {addTodo, toggleTodo, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer */





import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todosSlice = createSlice ({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action ) =>{
            state.todos.push({text: action.payload, completed: false})
        }, 

        toggledTodo: (state, action) => {
            const todo = state.todos [action.payload]

            if (todo){
                todo.completed = !todo.completed
            }
        }

    }
})