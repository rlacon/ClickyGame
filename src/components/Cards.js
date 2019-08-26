import React from "react";

function Cards(props) {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', padding: 10, display: 'inline-block', width: '25%', textAlign: 'center' }}>
            <img onClick={() => props.increaseScore()} style={{ cursor: 'pointer' }} alt={props.id} src={props.url} />
        </div>


        // role="img"
        // aria-label="click-item"
        // onClick={() => props.handleClick(props.id)}
        // style={{ backgroundImage: `url("${props.url}")` }}
        // style={{ backgroundImage: `url("${props.url}")` }}
        // className={`click-item${props.random ? " random" : ""}`}
    );
}

export default Cards;