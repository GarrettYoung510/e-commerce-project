// Import react becuase the Route itself is a component
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// Now import the components you'll pass as props
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";

const Routes = () => {
    return (
        <BrowserRouter>
        {/* Switch is like the switch statement for div */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;