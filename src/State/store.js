import { configureStore } from "@reduxjs/toolkit";
import {TodoSlice} from '../Components/TodoSlice'

export const store = configureStore ({
    reducer: {
        todos: TodoSlice
    }
})