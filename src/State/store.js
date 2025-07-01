import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Components/TodoSlice'

export const store = configureStore ({
    reducer: {
        todos: todoReducer
    }
})