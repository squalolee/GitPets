import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/components/Search/search";
import Login from "../src/components/Login/login";
import Signup from "../src/components/Signup/signup";
import NoMatch from "../src/pages/NoMatch";
import Home from "../src/components/Home/home";
// import Nav from "../src/components/Nav/nav";
import Footer from "../src/components/Footer/footer";
import Forum from "../src/components/Forum/forum";
import Profile from "./components/Profile/profile";
import { Link } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to Git-Pets!</h1>
        <button><Link to="/login">Login!</Link></button>
        <button><Link to="/signup">Sign Up!</Link></button>
        <button><Link to="/search">Continue as Guest!</Link></button>
      </div>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;


