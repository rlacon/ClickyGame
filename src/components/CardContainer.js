import React from "react";

function CardContainer(props) {
  return (
    <div style={{ padding: '5px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px' }} className="row">
      {props.children}
    </div>
  );
}

export default CardContainer;