//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from "react";
import './App.css'
import Home from "./assets/home/home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" name="Home" component={Home} />
        <Route exact path="/login" name="Login Page" component={Login} />
        {/* <Route exact path="/passwordReset" component={PasswordReset} /> */}
        <Route
          exact
          path="/register"
          name="Register Page"
          component={Register}
        />
        <Route exact path="/initial" component={Initial} />
        <Route exact path="/event-book" component={Eventbook} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/user" component={User} />
      </Switch>
    </BrowserRouter>
  </div>
  )
}

export default App
