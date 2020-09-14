import React from "react";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       
        <a className="navbar-brand" href="/search">
          Search Animals
        </a>
        <a className="navbar-brand" href="/forum">
          Forum
        </a>
      </nav>
    );
  }
  
  export default Nav;