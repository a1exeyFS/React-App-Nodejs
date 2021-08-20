import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container">
          <Link className="nav-item nav-link btn-light border rounded" to="/">
            <i className="fab fa-react px-2 fa-lg"></i>Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-item nav-link btn-light border rounded"
                to = "/about" ><i className="far fa-address-card px-2 fa-lg"></i>About</NavLink>
              </li>
              <li className="nav-item">
                {user && user.biz && (
                  <NavLink className="nav-item nav-link btn-light border rounded" to="/my-cards">
                    <i className="fas fa-id-card-alt px-2 fa-lg"></i>My Cards
                  </NavLink>
                )}
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {!user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link btn-light border rounded" to="/signin">
                      <i className="fas fa-sign-in-alt px-2 fa-lg"></i>Signin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link btn-light border rounded" to="/signup">
                      <i className="fas fa-user-plus px-2 fa-lg"></i>Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link btn-light border rounded" to="/biz-signup">
                      <i className="fas fa-user-tie px-2 fa-lg"></i>Business
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link btn-light border rounded" to="/logout"><i>{user.email}</i>  Logout 
                      <i className="fas fa-sign-out-alt px-2 fa-lg"></i>
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;