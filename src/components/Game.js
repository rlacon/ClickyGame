import React, { Component } from "react";
import CardContainer from "./CardContainer";
import Cards from "./Cards";
import CardData from "../CardData.json";

class Game extends Component {
    state = {
        CardData,
    }
// Need a function to shuffle the cards, handle if a user clicked a card, if the user won or lost after every card clikc, rest the game after the user loses
    render() {
        return (
            // Will need key, id, click function, and images 
            //<div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', textAlign: 'center'}}>
                <CardContainer style={{display: 'inherit'}}>
                    {
                        this.state.CardData.map(item => {
                            console.log(item);
                            return <Cards key={item.id} id={item.id} url={item.url}  />
                        })
                    }
                </CardContainer>
            //</div>
        )
    }
}

export default Game;
