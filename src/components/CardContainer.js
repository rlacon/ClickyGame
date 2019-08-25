import React from "react";

function CardContainer(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default CardContainer;