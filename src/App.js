import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Jumbotron from "./components/Jumbotron.js";
import CardContainer from "./components/CardContainer.js";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <CardContainer />
    </div>
  );
}

export default App;
