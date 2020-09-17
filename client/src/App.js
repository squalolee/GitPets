import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/components/Search/search";
import Login from "../src/components/Login/login";
import Signup from "../src/components/Signup/signup";
import NoMatch from "../src/pages/NoMatch";
import Home from "../src/components/Home/home";
import Footer from "../src/components/Footer/footer";
import Forum from "../src/components/Forum/forum";
import Profile from "./components/Profile/profile";
import { Link } from 'react-router-dom';
import Logo from "./logo.png"; 

function App() {
  return (
    <Router>
      <div>
        <h1><Link to="/home">Git-Pets 2.0!</Link></h1>
        <img src={Logo}></img>
      </div>
      
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      <Footer />
    </Router>
  );
}
//{withAuth(profile)} 

export default App;


