import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [isClicked,setIsClicked] = useState(false)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false) // we can intialise to true 
  const [password, setPassword] = useState('')
  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator =  useCallback(()=>{ // useCallback used for memoization and gives the relation
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str+='0123456789'
    if (charAllowed)  str+= '{@#%&*^)$!'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  },[length,isClicked,numberAllowed,charAllowed,setPassword])//here we are optimizing

  const copyPasswordToClipboard = useCallback(()=>{
    setTimeout(() => {
      
    }, 1000);
    passwordRef.current?.select();//?-> optional select
    //passwordRef.current?.setSelectionRange(0,3) // to select a specific range like max,min
    window.navigator.clipboard.writeText(password)
  },[password])
  //button changing color
  const buttonStyle = {
    backgroundColor: isClicked ? 'red' : 'green',
    // Add other styles as needed
  };
  // passwordGenerator()--> we cannot call like that
  //one method --> in button make it click event
  //another effect --> useEffect hook
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,isClicked,passwordGenerator])//here if there is any changes in [] then call again and used in the first time call and refresh of the page
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center
        my-3'>Password Generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3' 
          placeholder='password'
          readOnly
          ref={passwordRef} />
          <button style={buttonStyle}
          onClick={(e)=>{
              copyPasswordToClipboard()
              //changing the button color when it is clicked 
              setIsClicked(true);
              setTimeout(() => {
                setIsClicked(false)
              },1000);
          }}
          
          className='outline-none bg-green-700 text-black px-3
          py-0.5 shrink-0' >copy</button>
        </div> 
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked = {numberAllowed} 
            id="numberInput" 
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {charAllowed} 
            id="charInput" 
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
