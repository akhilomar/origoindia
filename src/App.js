import React from 'react';
import Header from './components/Header';
import './styles/styles.css'
import { Home, About, Menu, Offer, Contact } from './components/Sections';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Menu />
        <About />
        <Offer />
        <Contact />
      </main>
    </div>
  );
}

export default App;
