import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Listings from "./pages/listings";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
