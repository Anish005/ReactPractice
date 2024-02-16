import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  
  const [todos, setTodos] = useState([])
  //defining functionalities below
  const addTodo = (todo) => {
    //without overriding the old Todo we are passing the new Todos
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }
  const deleteTodo = (id) => {
    //map is not usually used while using delete functionality
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))

  }

  useEffect(() => {
    // to see some of the todos already while opening the paGE for the first time
    const todos = JSON.parse(localStorage.getItem('todos'))//note in localStorage all the values are stored in the string format which is why we often need to convert it into JSON
    //JSON keeps the structure preserved
    if (todos && todos.length > 0){
      setTodos(todos)
    }
  },[])//we can also use mulitple useEffect
  useEffect(()=>{
    //setItem in key and values
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                // to give guarantee that all div are different
                <div key={todo.id}
                  className='w-full'
                >
                    <TodoItem />
                </div>
              ))}
          </div>
      </div>
  </div>
  </TodoProvider>
  )
}

export default App
