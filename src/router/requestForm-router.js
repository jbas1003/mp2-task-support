import React from 'react'
import {Switch,Route} from 'react-router-dom'

// auth
import FormElement from '../views/requestform'
import TaskSubmitted from '../views/requestform/confirm-submit'

const RequestFormRouter = () => {
    return (
            <>
            <Switch>
                <Route path="/request-form" exact component={FormElement}/>
                <Route exact path="/request-form/submitted" component={TaskSubmitted}/>
            </Switch>
               
            </>
    )
}

export default RequestFormRouter
