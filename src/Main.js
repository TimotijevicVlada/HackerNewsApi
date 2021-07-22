import React, { Component } from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <h1 className="main-header">SINGLE PAGE APPLICATION</h1>
        <div className="navigation-menu">
          <ul className="header">
            <li>
              <NavLink className="nav-item" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="sadrzaj">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
