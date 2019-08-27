import React from "react";

function Cards(props) {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', padding: 10, display: 'inline-block', width: '25%', textAlign: 'center' }}>
            <img
                style={{ cursor: 'pointer' }}
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

export default Cards;