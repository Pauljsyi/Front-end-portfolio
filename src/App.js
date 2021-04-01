import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <About />
      <Navbar />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
