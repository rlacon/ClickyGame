import React, { Component } from "react";
import CardContainer from "./CardContainer";
import Cards from "./Cards";
import CardData from "../CardData.json";
import Jumbotron from "./Jumbotron";

class Game extends Component {

    state = {
        CardData,
        count: 0,
        clicked: [],
    }

    increaseScore = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Causes the state of the CardData object to flip from false to true
    loseGame = id => {
        this.state.CardData.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (newItem.clicked === false) {
                    newItem.clicked = true;
                    this.shuffleCards();
                }
                else {
                    alert("You lose!")
                    this.setState({ count: 0 });
                }
            }
            // console.log(this.state.CardData)
            console.log(newItem)
            // console.log(id)
            this.shuffleCards()
            return newItem
        });
    };

    shuffleCards = () => {
        const { CardData } = this.state;
        CardData.sort(() => Math.random() - 0.5)
        this.setState({ count: this.state.count + 1 });
    }

    // winGame = id => {}

    // Need a function to shuffle the cards, if the user won or lost after every card click, reset the game after the user loses
    render(props) {
        return (
            <div>
                <Jumbotron />
                <nav className="navbar navbar-light bg-light">
                    <p id="score-text">Current Score: {this.state.count}</p>
                    <p id="top-score-text">High Score: 0</p>
                </nav>
                <CardContainer>
                    {
                        this.state.CardData.map(item => (
                            // (Parantheses not needed if rendering an object)
                            <Cards
                                style={{ cursor: 'pointer' }}
                                increaseScore={this.increaseScore}
                                key={item.id}
                                id={item.id}
                                url={item.url}
                                loseGame={this.loseGame}
                                shuffleCards={this.shuffleCards}
                            />
                        ))
                    }
                </CardContainer>
            </div>
        )
    }
}

export default Game;
