import React from "react";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Git-Pets!
        </a>
        <a className="navbar-brand" href="/login">
          Login
        </a>
        <a className="navbar-brand" href="/signup">
          Sign Up
        </a>
        <a className="navbar-brand" href="/search">
          Continue as Guest
        </a>
        <a className="navbar-brand" href="/forum">
          Forum
        </a>
        <a className="navbar-brand" href="/userPage">
          Profile
        </a>
      </nav>
    );
  }
  
  export default Nav;