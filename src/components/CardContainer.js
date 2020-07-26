import React from "react";

function CardContainer(props) {
  return (
    <div style={{marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '.5rem', width: '100%'}} className="row">
        {props.children}
    </div>
  );
}

export default CardContainer;