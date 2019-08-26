import React from "react";

function CardContainer(props) {
    return (
        <div className="container" style={{display: 'inherit', justifyContent: 'flex-start', paddingBottom: 30}}>
            
            {props.children}
        </div>
    );
}

export default CardContainer;