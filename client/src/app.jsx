import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Home} exact={true} />
        <Route path={'/register'} component={Register} exact={true} />
        <Route path={'/login'} component={Login} exact={true} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

