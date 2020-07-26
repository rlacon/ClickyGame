import React from "react";

function Cards(props) {
  return (
    <div className="col-xs-4
                col-sm-4
                col-md-2
                col-lg-2">
      <img
        style={{ cursor: 'pointer', textAlign: 'center', margin: 'auto', maxWidth: '100%', paddingTop: '.5rem', paddingBottom: '.5rem', }}
        alt={props.id}
        src={props.url}
        onClick={() => {
          props.loseGame(props.id);
        }}
      />
    </div>
  );
}

export default Cards;