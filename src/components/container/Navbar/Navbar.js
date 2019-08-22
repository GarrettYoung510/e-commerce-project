import React, { Component } from 'react';
// Import css file for styling
import './Navbar.css';
// import withRouter so, you can access this.props.history
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class Navbar extends Component {
    // Define linkFunc so it redirects to specified route provided
    linkFunc(path) {
        this.props.history.push(path);
    }
    render() {
        console.log(this.props.user);
        return (
            <div className='nav container'>
                <div className='desktop-nav'>
                    {/* Make sure every link uses linkFunc, except the login link. s*/}
                    <p className="nav-link" onClick={() => this.linkFunc('/')}>Home</p>
                    <p className="nav-link" onClick={() => this.linkFunc('/about')}>About</p>
                    <p className="nav-link" onClick={() => this.linkFunc('/cart')}>Cart</p>
                    {/* Conditionally render the login button based if the user has data(it's login) else logout */}
                    {/* Conditional render the user image if logged in. */}
                    <div className="nav-link" onClick={() => this.props.user ? this.logout() : this.login()} >
                        {this.props.user ?
                            <div>
                                <p>Logout</p>
                                <img className='user-image' src={this.props.user.profile_picture} alt={this.props.user.nickname} />
                            </div>
                            : <p>Login</p>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

// Then wrap our Component with the HOC, and the connect double invoked
export default withRouter(connect(mapStateToProps)(Navbar));