import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/components/Search/search";
import Login from "../src/components/Login/login";
import Signup from "../src/components/Signup/signup";
import NoMatch from "../src/pages/NoMatch";
import Home from "../src/components/Home/home";


function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to Git-Pets!</h1>
      </div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          <Route component={NoMatch} />
        </Switch>
    </Router>
  );
}

export default App;
