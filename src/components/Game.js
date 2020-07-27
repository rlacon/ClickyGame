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
      topCount: 0,
      fadeIn: false,
      visible: false,
      resetScore: false,
      pointsToSubtract: 0,
      shake: false
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
    // this.setState({ shake: true });
    this.increaseScore();

    this.state.CardData.map(item => {
      if (item.id === clickedId) {
        if (item.alreadyClicked === false) {
          clickSoundEffect.play();
          this.setState({ visible: true });
          setTimeout(this.hidePlusScore, 500);
          item.alreadyClicked = true;
        } else {
          loseSoundEffect.play();
          this.setState({ resetScore: true });
          this.setState({ shake: true });
          this.setState({ pointsToSubtract: this.state.count });
          setTimeout(this.hideMinusScore, 500);
          this.resetGame();
        }
      }
      return item;
    });
    this.setState({ CardData });
    this.shuffleCards();
  }

  hidePlusScore = () => {
    this.setState({ visible: false });
  }

  hideMinusScore = () => {
    this.setState({ resetScore: false });
    this.setState({ shake: false });
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
          {/* Score */}
          <div className="score_counter">
            <p>Current Score: {this.state.count}</p>
          </div>

          {/* Point Meter */}
          <div className="fade-in">
            <div className={this.state.visible ? 'fade-in' : 'fade-out'}>
              <p style={{ paddingRight: '10px', color: '#0000E0' }}>+1</p>
            </div>
          </div>
          <div className="fade-in">
            <div className={this.state.resetScore ? 'fade-in' : 'fade-out'}>
              <p style={{ paddingRight: '10px', color: '#8B0000' }}>-{this.state.pointsToSubtract}</p>
            </div>
          </div>

          {/* High Score */}
          <div className="high_score_counter">
            <p>High Score: {this.state.topCount}</p>
          </div>
        </div>
        <div className={this.state.shake ? 'card-shake' : ''}>
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
      </div >
    );
  }
}

export default Game;