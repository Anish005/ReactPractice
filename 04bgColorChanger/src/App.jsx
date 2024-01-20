import { useState } from "react"

function App() {
  const [color, setColor] = useState("lavender")

  return (
  
      <div className="w-full h-screen duration-200"
      // writing inline css in react as mentioned below
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 
        inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3
          shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            onClick={()=> setColor('blue')}
            className="outline-none px-4 py-1 shadow-lg 
            text-white rounded-full "
            style={{backgroundColor:"blue"}}
            >Blue</button>
            <button 
            onClick={()=> setColor('black')}
            className="outline-none px-4 py-1 shadow-lg 
            text-white rounded-full "
            style={{backgroundColor:"black"}}
            >Black</button>
            <button 
            onClick={()=> setColor('green')}
            className="outline-none px-4 py-1 shadow-lg 
            text-white rounded-full "
            style={{backgroundColor:"green"}}
            >Green</button>
            <button 
            onClick={()=> setColor('yellow')}
            className="outline-none px-4 py-1 shadow-lg 
            text-white rounded-full "
            style={{backgroundColor:"yellow"}}
            >Yellow</button>
            <button 
            onClick={()=> setColor('purple')}
            className="outline-none px-4 py-1 shadow-lg 
            text-white rounded-full "
            style={{backgroundColor:"purple"}}
            >Purple</button>
            <button 
            onClick={()=> setColor('pink')}
            className="outline-none px-4 py-1 shadow-lg 
            text-white rounded-full "
            style={{backgroundColor:"Pink"}}
            >Pink</button>
          </div>
        </div>

      </div>
    
  ) 
}

export default App
