import React from 'react'
import Index from '../views/dashboard'
import {Switch,Route} from 'react-router-dom'

import TaskData from '../views/dashboard/tasks/task-list'
import TableData from '../views/dashboard/users/view-users'

//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";

const DefaultRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={300}>
                <Switch>
                    <Route path="/dashboard" exact component={Index} />
                    <Route path="/dashboard/tasks/task-list" exact component={TaskData} />
                    <Route path="/dashboard/users/view-users"   exact component={TableData} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
