import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <h1>GitPets</h1>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Search} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
