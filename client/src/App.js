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
import Pawprint from "./pawprint.png"; 
// import CatFacts from "./components/CatFacts/catfacts"; 
import "./styles.css"

function App() {
  return (
    <Router>
      <header>
        <h1 className="center"><Link to="/home">Git-Pets 2.0!</Link></h1>
      </header>
      <div className="jumbotron jumbotron-fluid" id="navbar">
        <div className="text-center">
          <img src={Logo} className="img-fluid" alt="Logo"></img>
        </div>
      </div>
      <div className="paw">
        <img src={Pawprint} className="img" alt="Pawprint"></img>
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


