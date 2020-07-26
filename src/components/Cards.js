import React, { useState } from 'react';

function Cards(props) {
  return (
    <div className="card
                col-xs-4
                col-sm-3
                col-md-2
                col-lg-2">
      <img
        style={{ cursor: 'pointer', textAlign: 'center', margin: 'auto', maxWidth: '100%', marginTop: '5px', marginBottom: '5px' }}
        alt={props.id}
        src={props.url}
        onClick={() => {
          props.loseGame(props.id);
        }}
        className="img"
      />
    </div>
  );
}

export default Cards;