import { configureStore } from "@reduxjs/toolkit";
import todoReducers from '../Components/TodoSlice'

export const store = configureStore({
   reducer:{
      todos: todoReducers,
   }
})