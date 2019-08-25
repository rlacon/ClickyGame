import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://rlacon.github.io/ClickyGame">Clicky Game</a>
      <p id="score-text">0</p>
      <p id="top-score-text">0</p>
    </nav>
  );
}

export default Navbar;
