import React from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import Buttons from './Buttons';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <Cards />
      <Buttons />
    </div>
  );
}

export default App;
