// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";

import Home from "./components/home/home";

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="Home" component={Home} />
          <Route />

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
