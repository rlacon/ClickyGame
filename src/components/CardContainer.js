import React from "react";

function CardContainer(props) {
    return (
        <div className="container" style={{display: 'inherit', justifyContent: 'flex-start', justifyContent: 'flex-end', justifyContent: 'center', justifyContent: 'space-between', justifyContent: 'space-around'}}>
            
            {props.children}
        </div>
    );
}

export default CardContainer;