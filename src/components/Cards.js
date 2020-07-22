import React from "react";

function Cards(props) {
  return (
    <div className="col-xs-8
                col-sm-4
                col-md-4
                col-lg-2">
      <img
        style={{ cursor: 'pointer', textAlign: 'center', margin: 'auto' }}
        alt={props.id}
        src={props.url}
        onClick={() => {
          props.loseGame(props.id)
          // props.increaseScore()
        }}
      />
    </div>
  );
}
{/* <div style={{ justifyContent: 'center', alignItems: 'center', padding: 10, display: 'inline-block', width: '25%', textAlign: 'center' }}> */ }

export default Cards;