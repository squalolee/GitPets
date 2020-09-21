import React from "react";

function Nav() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button type="button" className="btn btn-primary center" href="/search" id="navButton">
            Search Animals
          </button>
          <button type="button" className="btn btn-primary center" href="/forum" id="navButton">
            Forum
          </button>
        </nav>
      </div>
    );
  }
  
  export default Nav;