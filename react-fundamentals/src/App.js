import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import TwoWayBinding from "./Components/TwoWayBinding";
import EventHandler from "./Components/EventHandler";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>My Sample React page.</p>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/two-way-binding"}>Two Way Binding</Link>
              </li>
              <li>
                <Link to={"/event-handler"}>Event Handler</Link>
              </li>
            </ul>
          </header>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/two-way-binding" component={TwoWayBinding} />
            <Route exact path="/event-handler" component={EventHandler} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
