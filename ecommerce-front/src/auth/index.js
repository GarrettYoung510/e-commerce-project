import { API } from "../config";

// POST new user information into DB
export const signup = user => {
  return (
    fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      // promise to respond with json
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      })
  );
};

// SIGN IN
export const signin = user => {
  return (
    fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      // promise to respond with json
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      })
  );
};

// next is a call back that can be set as anything this is reusable
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    // return fetch first argument is the url, second is the method
    return fetch(`${API}/signout`, {
      method: "GET"
    })
      .then(response => {
        console.log(`signout`, response);
      })
      .catch(err => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  // if jwt aka logged in then we get that item
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
