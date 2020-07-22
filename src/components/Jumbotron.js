import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <h1 className="display-4">Clicky Game</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
  );
}

export default Jumbotron;
