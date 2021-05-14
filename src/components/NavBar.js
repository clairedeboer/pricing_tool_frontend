import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="ui four item menu">
      <Link className="item" to="/">
        Get a Quote
      </Link>
      <Link className="item" to="/bags"> 
        Products
      </Link>
      <Link className="item" to="/users/login">
        Login
      </Link>
      <Link className="item" to="users/signup">
        Signup
      </Link>
    </div>
  );
};

export default NavBar;