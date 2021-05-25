import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SingUp from '../pages/SingUp'
import SingIn from '../pages/SingIn'
import Tasks from '../pages/Tasks'


const App=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SingIn}/>
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/singup" component={SingUp}/>
            <Route exact path="/login" component={SingIn}/>
        </Switch>
    </BrowserRouter>
)

export default App