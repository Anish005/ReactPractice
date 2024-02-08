import UserContextProvider from "./context/UserProviderContext"
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {
  

  return (
    <UserContextProvider>
      <h1>Hey there how are you here today ?</h1>
      <Login />
      <Profile />
    </ UserContextProvider>
  )
}

export default App
