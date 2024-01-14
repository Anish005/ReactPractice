import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5 as this variable will not be reflected on the UI
  //hook responsible for changing the state, that is the change is propagated under the UI
  let [counter,setCounter] = useState(15)//give a default value to the useState for a variable
  //state and UI are brought to be in sync
  const addValue = () =>{
    //console.log('value addded',Math.random());//for checking if the function  is working or not
    console.log('clicked ', counter);
    //major power of react on UI updation basically variable updation
    //counter = counter + 1
    //we can also pass the directly upadated value in the setCounter(counter) or like below mentioned
    setCounter(counter + 1)
  }
  const removeVal = () => {
    //part of assignment to keep a check on the counter till 0 and dont make it negative
    if (counter === 0) {
      console.log('this the end');
    }
    else{
    console.log('clicked',counter);
    setCounter(counter - 1)
    }
  }  
  

  return (
    <>
      <h1>anish learning react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add VAL{counter}</button>
      <br />
      <button
      onClick={ removeVal }
      >Sub VAL {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
