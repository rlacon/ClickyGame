import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Jumbotron from "./components/Jumbotron.js";
import Game from "./components/Game.js";


function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Game />
    </div>
  );
}

export default App;
