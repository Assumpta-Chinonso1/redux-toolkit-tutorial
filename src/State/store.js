import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../Components/TodoSlice'
export const store = configureStore({
    reducer:{
        todos: todosReducer,
    }
})