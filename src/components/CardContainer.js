import React from "react";


function CardContainer(props) {
  return (
    <div style={{marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="row">
        {props.children}
    </div>
  );
}

export default CardContainer;
