import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Tasks from '../pages/Tasks'
import Cookies from 'universal-cookie'
import AddTask from '../pages/AddTask'
import CssBaseline from '@mui/material/CssBaseline'

const cookies = new Cookies()

const App = () => {
  if (cookies.get('uname')) {
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Tasks} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/task/new" component={AddTask} />
          </Switch>
        </BrowserRouter>
      </>
    )
  } else {
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/**" component={Login} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }

}

export default App