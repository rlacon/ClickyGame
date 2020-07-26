import React, { Component } from "react";
import CardContainer from "./CardContainer";
import Cards from "./Cards";
import CardData from "../CardData.json";
import Jumbotron from "./Jumbotron";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardData,
      count: 0,
      topCount: 0
    };
  }

  // Increases current score and matches the value of high score if it's greater than or equal to it
  increaseScore = () => {
    let winSoundEffect = new Audio("/win.mp3");

    this.setState({
      count: this.state.count + 1
    }, function () {
      if (this.state.count >= this.state.topCount) {
        this.setState({ topCount: this.state.count });
        if (this.state.count === 12) {
          winSoundEffect.play();
          this.resetGame();
        }
      }
    }.bind(this));
  }

  resetGame = () => {
    this.setState({ count: 0 });
    this.state.CardData.map(item => {
      if (item.alreadyClicked === true) {
        item.alreadyClicked = false;
      }
      return item;
    });
  }

  // Causes the state of the CardData object to flip from false to true
  // Runs resetGame if true is already clicked
  loseGame = clickedId => {
    let clickSoundEffect = new Audio("/coin_effect.mp3");
    let loseSoundEffect = new Audio("/lose.mp3");

    this.increaseScore();

    this.state.CardData.map(item => {
      if (item.id === clickedId) {
        if (item.alreadyClicked === false) {
          clickSoundEffect.play();
          item.alreadyClicked = true;
        } else {
          loseSoundEffect.play();
          this.resetGame();
        }
      }
      return item;
    });
    this.setState({ CardData });
    this.shuffleCards();
  }

  shuffleCards = () => {
    const CardData = this.state.CardData;
    CardData.sort(() => Math.random() - 0.5);
    this.setState({ CardData });
  }

  render() {
    return (
      <div
        style={{ textAlign: 'center' }}>
        <Jumbotron />
        <div className="score_container">
          <div className="score_counter">
            <p>
              Current Score: {this.state.count}
            </p>
          </div>
          <div class="vertLine">|</div>
          <div className="high_score_counter">
            <p>
              High Score: {this.state.topCount}
            </p>
          </div>
        </div>
        <CardContainer>
          {
            this.state.CardData.map(item => (
              <Cards
                style={{ cursor: 'pointer' }}
                key={item.id}
                id={item.id}
                url={item.url}
                loseGame={this.loseGame} />
            ))
          }
        </CardContainer>
      </div>
    )
  }
}

export default Game;