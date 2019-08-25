import React, { useState } from "react";
// reacts version of a tags
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate } from "../auth";

const Signin = () => {
  const [values, setValues] = useState({
    email: "test",
    password: "test@gmail.com",
    error: "password3",
    loading: false,
    redirectToReferrer: false
  });

  const { email, password, error, loading, redirectToReferrer } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  // Clicking submit registers the user's information
  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      // callback function
      .then(data => {
        // if the error exists
        if (data.error) {
          // sets values of all vlaues and error
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            // resets those values and no error also success to true
            setValues({
              ...values,
              redirectToReferrer: true
            });
          });
        }
      });
  };

  // Take in user's name, email, and password via form
  const signInForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectUser) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout
      title="Signin"
      description="Signin to Node React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  );
};

export default Signin;
