
import { MainPage } from './components/MainPage'
import React from 'react'
import "./App.css";
import {BrowserRouter} from 'react-router-dom'


function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
      
    </React.Fragment>
  )
}

export default App
