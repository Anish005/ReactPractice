
import Anish from './anish'
function App() {
  const username = 'anish panda'

  return (
    //we need to return only one parent element , so wrap it inside a div or rather a fragment
    <>
      <Anish />
      {/* we dont write javascript instead we write the final outcome by curly braces {} only mention the evaluated expression */}
      <h1>how is the josh {username}</h1> 
      <p> the josh is high sir </p>
    </>
    
  )
}

export default App
