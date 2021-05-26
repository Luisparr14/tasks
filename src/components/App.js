import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SingUp from '../pages/SingUp'
import SingIn from '../pages/SingIn'
import Tasks from '../pages/Tasks'
import Cookies from 'universal-cookie'
import AddTask from '../pages/AddTask'

const cookies = new Cookies()
console.log("App js",cookies.getAll());
const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SingIn} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/singup" component={SingUp} />
            <Route exact path="/login" component={SingIn} />
            <Route exact path="/task/new" component={AddTask} />
        </Switch>
    </BrowserRouter>
)

export default App