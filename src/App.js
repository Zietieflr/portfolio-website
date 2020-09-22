import React from 'react';
import NavBar from './components/NavBar'
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import GitHub from "./components/GitHub"
import Medium from "./components/Medium"
import Projects from "./components/Projects"
import './App.css';

function App() {
  return (
    <main className="App">
      <h1>Logan McGuire</h1>
      <NavBar/>
      <section>
        {/* Render content based off of Router */}
        <About />
        <ContactMe />
        <GitHub />
        <Medium />
        <Projects />
      </section>
    </main>
  );
}

export default App;
