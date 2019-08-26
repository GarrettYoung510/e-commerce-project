// Import react becuase the Route itself is a component
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// Now import the components you'll pass as props
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";

const Routes = () => {
    return (
        <BrowserRouter>
        {/* Switch is like the switch statement for div */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;