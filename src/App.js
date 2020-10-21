import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
// import ContactMe from "./components/ContactMe";
import GitHub from "./components/GitHub";
import Medium from "./components/Medium";
import Projects from "./components/Projects";
import Footer from "./components/Footer"

import dragon from "./images/sean-thomas-unsplash.png";
import "./App.css";

function App() {
  return (
    <>
    <main className="App">
      <Router>
        <h1><Link to="/">Logan McGuire</Link></h1>
        <NavBar />
        <section>
          <Switch>
            <Route exact path="/" render={() => {
              return <Landing /> }}
            />
            <Route path="/about" render={() => {
              return <About /> }}
            />
            {/* <Route path="/contact" render={() => {
              return <ContactMe /> }}
            /> */}
            <Route path="/github" render={() => {
              return <GitHub /> }}
            />
            <Route path="/medium" render={() => {
              return <Medium /> }}
            />
            <Route path="/projects" render={(routerProps) => {
              return <Projects routerProps={routerProps} /> }}
            />
          </Switch>
        </section>
      </Router>
      <img id="decor-dragon" aria-hidden="true" alt="" src={dragon} />
    </main>
    <Footer />
    </>
  );
}

export default App;
