import React, { Component } from "react";
import CardContainer from "./CardContainer";
import Cards from "./Cards";
import CardData from "../CardData.json";
import Jumbotron from "./Jumbotron";

class Game extends Component {
    state = {
        CardData,
        count: 0
    }

    increaseScore = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Need a function to shuffle the cards, handle if a user clicked a card, if the user won or lost after every card click, rest the game after the user loses
    render() {
        return (
            // Will need key, id, click function, and images 
            <div>

                <Jumbotron />
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="http://rlacon.github.io/ClickyGame">Clicky Game</a>
                    <p id="score-text">Score: {this.state.count}</p>
                    <p id="top-score-text">0</p>
                </nav>                
                <CardContainer>
                    {
                        this.state.CardData.map(item => {
                            return <Cards style={{ cursor: 'pointer' }} increaseScore={this.increaseScore} key={item.id} id={item.id} url={item.url} />
                        })
                    }
                </CardContainer>
            </div>
        )
    }
}

export default Game;
