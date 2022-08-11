import './App.scss';
import Header from './components/Header';
import React from 'react'
import Outset from './components/Outset';
import OutsetAbout from './components/OutsetAbout';
import { Projects } from './components/Projects';


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
      </main>
    </>

  );
}

export default App;
