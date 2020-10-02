import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import GitHub from "./components/GitHub";
import Medium from "./components/Medium";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  return (
    <main className="App">
      <Router>
        <h1><Link to="/">Logan McGuire</Link></h1>
        <NavBar />
        <section>
          <Switch>
            <Route path="/about" render={(routerProps) => {
              return <About /> }}
            />
            <Route path="/contact" render={(routerProps) => {
              return <ContactMe /> }}
            />
            <Route path="/github" render={(routerProps) => {
              return <GitHub /> }}
            />
            <Route path="/medium" render={(routerProps) => {
              return <Medium /> }}
            />
            <Route path="/projects" render={(routerProps) => {
              return <Projects routerProps={routerProps} /> }}
            />
          </Switch>
        </section>
      </Router>
    </main>
  );
}

export default App;
