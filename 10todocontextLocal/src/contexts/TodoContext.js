import { createContext,useContext } from "react";
// context api is not used for big projects ,we use redux toolkit instead
export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        },

    ],
    addTodo: (todo) => {},//we will decide functionality in the App.jsx
    updateTodo:(id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete:(id)=>{}
})


export const useTodo = () =>{
    //whenver you use useContext then you have to provide a context to it for which you are doing some stuffs
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider