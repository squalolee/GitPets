import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button type="button" className="btn btn-primary center" href="/search" id="navButton"><Link to='/search'>
            Search Animals
          </Link></button>
          <button type="button" className="btn btn-primary center" href="/profile" id="navButton"><Link to='/profile'>
            Profile
          </Link></button>
          <button type="button" className="btn btn-primary center" href="/forum" id="navButton"><Link to='/forum'>
            Forum
          </Link></button>
        </nav>
      </div>
    );
  }
  
  export default Nav;