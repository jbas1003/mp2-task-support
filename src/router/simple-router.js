import React from 'react'
import {Switch,Route} from 'react-router-dom'

// auth
import SignIn from '../views/dashboard/auth/sign-in'
// errors

const SimpleRouter = () => {
    return (
            <>
            <Switch>

                {/* auth */}
                <Route path="/" exact component={SignIn}/>
                <Route exact path="/auth/sign-in"      component={SignIn}/>
                {/* error */}
            </Switch>
               
            </>
    )
}

export default SimpleRouter
