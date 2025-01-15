import "./App.scss";
import Header from "./components/Header";
import React, { useState } from "react";
import Outset from "./components/Outset";
import OutsetAbout from "./components/OutsetAbout";
import { Projects } from "./components/Projects";
import Ability from "./components/Ability";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDark, setDark] = useState(false);
  return (
    <>
      <header>
        <Header isDark={isDark} onClick={(value)=> setDark(!value)} />
      </header>
      <main className="home">
        <Outset isDark={isDark}/>
        <OutsetAbout isDark={isDark}/>
        <Projects isDark={isDark}/>
        <Ability isDark={isDark}/>
        <Contact isDark={isDark}/>
        <Footer isDark={isDark}/>
      </main>
    </>
  );
}

export default App;
