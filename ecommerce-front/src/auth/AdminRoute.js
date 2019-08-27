// eslint-disable-next-line
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() && isAuthenticated().user.role === 1 ? (
        //   if authenticated we return the component with props
        <Component {...props} />
      ) : (
        //   otherwise we redirect to sign in page
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default AdminRoute;
