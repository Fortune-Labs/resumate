import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route />
          <Route />

        </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App
