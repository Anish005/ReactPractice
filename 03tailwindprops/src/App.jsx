import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:'Anish',
    age:21
  }
  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind Test</h1>
      <Card username='anisha' btnText='click me'/>
      <Card username='Manisha'/> 
      {/* here it takes the default values of the props */}
      
    
    </>
  )
}

export default App
