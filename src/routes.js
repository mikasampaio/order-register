import React from "react";
import Home from './pages/Home'
import Orders from './pages/Orders'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Orders} />
            </Switch>
        </Router>
    )

}

export default Routes