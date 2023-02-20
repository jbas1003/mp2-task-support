
//router
import { Switch,Route } from 'react-router'
//layoutpages
import Default from '../layouts/dashboard/default'
import Simple from '../layouts/dashboard/simple'
import RequestForm from '../layouts/dashboard/request-form'

const IndexRouters = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Simple}></Route>
                <Route path="/errors" component={Simple}></Route>
                <Route path="/request-form" component={RequestForm}></Route>
                <Route path="/dashboard" component={Default}></Route>
            </Switch>
        </>
    )
}

export default IndexRouters
