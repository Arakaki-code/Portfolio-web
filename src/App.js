import "./App.scss";
import Header from "./components/Header";
import React from "react";
import Outset from "./components/Outset";
import OutsetAbout from "./components/OutsetAbout";
import { Projects } from "./components/Projects";
import Ability from "./components/Ability";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="home">
        <Outset />
        <OutsetAbout />
        <Projects />
        <Ability />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
