import React from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";

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
      <h1>Logan McGuire</h1>
      <Router>
        <NavBar/>
        <section>
          {/* Render content based off of Router */}
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
              return <Projects /> }}
            />
          </Switch>
        </section>
      </Router>
    </main>
  );
}

export default App;
