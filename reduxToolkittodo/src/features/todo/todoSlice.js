//step 2 -> creating reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid -> generates unique id

//how store we look initially we need to declare initialState
const initialState = {
    todos:[{id: 1,text:"Hello World"}]
}


//creating slice (in general bigger version of reducer)
export const  todoSlice = createSlice({
    name:'todo',
    initialState, 
    reducers: {
    /*incase of context API we were not writing the defn of funcs 
    but only declaring them but in redux toolkit we are defning  the func  here*/
    // pass function references for the funcs created outside of this scope
        addTodo: (state,action)  => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state
                          .todos
                          .filter((todo) => todo.id !== action.payload)
        },
        // updateTodo functionality

        // deleteTodo functionality
    }
}) 
//step -3
//syntax for exporting reducers (must do to use the functionalties in the components and to store them  in one place)
export const {addTodo, removeTodo} = todoSlice.actions 
export default todoSlice.reducer
