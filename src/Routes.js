// Import react becuase the Route itself is a component
import React from 'react';
// Import the Route, and Switch Comopnent used for defining your routes
// Route is the route itself which can accept render props, but for the purpose of this tutorial we used the component and path prop
// Switch responsible for directing to first child that matches thier respective route
import { Route, Switch } from 'react-router-dom';
// Now import the components you'll pass as props
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;