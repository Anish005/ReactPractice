import { configureStore } from "@reduxjs/toolkit";
// step1 -> configure store (inside store.js )
//step-4 -> our store know about the reducers we created
import todoReducer from '../features/todo/todoSlice'

export const store  = configureStore({
    reducer: todoReducer
})   