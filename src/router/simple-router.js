import React from 'react'
import {Switch,Route} from 'react-router-dom'

// auth
import SignIn from '../views/dashboard/auth/sign-in'
// errors
import Error404 from '../views/dashboard/errors/error404'
import Error500 from '../views/dashboard/errors/error500'
import Maintenance from '../views/dashboard/errors/maintenance'

const SimpleRouter = () => {
    return (
            <>
            <Switch>

                {/* auth */}
                <Route path="/" exact component={SignIn}/>
                <Route exact path="/auth/sign-in"      component={SignIn}/>
                {/* error */}
                <Route exact path="/errors/error404"   component={Error404}/>  
                <Route exact path="/errors/error500"  component={Error500}/>
                <Route exact path="/errors/maintenance" component={Maintenance}/>
            </Switch>
               
            </>
    )
}

export default SimpleRouter
