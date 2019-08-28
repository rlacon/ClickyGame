import React, { Component } from "react";
import CardContainer from "./CardContainer";
import Cards from "./Cards";
import CardData from "../CardData.json";
import Jumbotron from "./Jumbotron";

class Game extends Component {

    state = {
        CardData,
        count: 0,
        topCount: 0,
    }

    // Increases current score and matches the value of high score if it's greater than or equal to it
    increaseScore = () => {
        this.setState({ count: this.state.count + 1 });
        const { count, topCount } = this.state;
        const highScore = count + 1;

        this.setState({ count: highScore });

        console.log(highScore)
        if (highScore >= topCount) {
            this.setState({ topCount: highScore });
        }
        else if (count === 12) {
            console.log("You win!");
        }
    };

    resetGame = () => {
        this.state.CardData.map(item => {
            if (item.clicked === true) {
                item.clicked = false;
            }
            return item;
        })
        this.setState({ count: 0 });
    };

    // Causes the state of the CardData object to flip from false to true and runs resetGame if true is clicked 
    loseGame = id => {
        this.increaseScore();
        const CardData = this.state.CardData.map(item => {
            if (item.id === id) {
                if (item.clicked === false) {
                    item.clicked = true;
                }
                else {
                    alert("You lose!")
                    this.resetGame();
                }
            }
            // console.log(this.state.CardData)
            // console.log(newItem)
            // console.log(id)
            return item;
        });
        this.setState({ CardData });
        this.shuffleCards();
        console.log(CardData, this.state.CardData)
    };

    shuffleCards = () => {
        const CardData = this.state.CardData;
        CardData.sort(() => Math.random() - 0.5)
        this.setState({ CardData });
        console.log(CardData, this.state.CardData)
    }

    render(props) {
        return (
            <div>
                <Jumbotron />
                <nav className="navbar navbar-light bg-light">
                    <p id="score-text">Current Score: {this.state.count}</p>
                    <p id="top-score-text">High Score: {this.state.topCount}</p>
                </nav>
                <CardContainer>
                    {
                        this.state.CardData.map(item => (
                            // (Parantheses not needed if rendering an object)
                            <Cards
                                style={{ cursor: 'pointer' }}
                                key={item.id}
                                id={item.id}
                                url={item.url}
                                loseGame={this.loseGame}
                            />
                        ))
                    }
                </CardContainer>
            </div>
        )
    }
}

export default Game;
