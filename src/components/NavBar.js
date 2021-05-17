import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

  return (
    <div className="ui four item menu">
      <Link className="item" to="/">
        Get a Quote
      </Link>
      <Link className="item" to="/bags"> 
        Products
      </Link>
      {!currentUser ? (
        <Link className="item" to="/users/login">
          Login
        </Link>
      ) : (
        <Link className="item" to="/users/login" onClick={logout}>
          Logout
        </Link>
      )}
      {!currentUser ? (
        <Link className="item" to="/users/signup">
          Signup
        </Link>
      ) : (
        <Link className="item" to="/">
          Welcome {currentUser.name}!
        </Link>
      )}
    </div>
  );
};

export default NavBar;