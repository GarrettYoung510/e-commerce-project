import React, { Component } from 'react';
import './App.css';
// Add Navbar to all pages
import Navbar from './components/container/Navbar/Navbar';
// import Home from'./components/container/Home/Home';
import Routes from './Routes';
// Import withROuter since using redux and want app to have access to this.props.history
import { withRouter } from 'react-router-dom';
// import axios to get your user session from your backend
import axios from 'axios';
import './App.css';

class App extends Component {
  // Get the session in componentDidMount, and if it has data set intialState user to it
  componentDidMount() {
    axios.get('/api/user-data')
    // .then(res => {
    //   const { dispatch } = this.props;
    //   if (res.data.user) {
    //     //Dispatch the login function with the user data. 
    //     dispatch(login(res.data.user));
    //     //Else logout the user from the intialState.
    //   } else {
    //     //Dispatch the logout the user by default if there is no data in session.
    //     dispatch(logout());
    //   }
    // })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {Routes}
      </div>
    );
  }
}

// Then connect app to reducer
export default withRouter(App);