// import React, { Component } from "react";
// import CardContainer from "./CardContainer";
// import Cards from "./Cards";
// import CardData from "../CardData.json";
// import Jumbotron from "./Jumbotron";

// class Game extends Component {

//   state = {
//     CardData,
//     count: 0,
//     topCount: 0,
//   }

//   // Increases current score and matches the value of high score if it's greater than or equal to it
//   increaseScore = () => {
//     this.setState({ count: this.state.count + 1 });
//     const { count, topCount } = this.state;
//     const highScore = count + 1;

//     this.setState({ count: highScore });

//     console.log(highScore)
//     if (highScore >= topCount) {
//       this.setState({ topCount: highScore });
//     } else if (count === 12) {
//       debugger;
//       alert("You win!");
//       this.resetGame();
//     }
//   };

//   resetGame = () => {
//     this.state.CardData.map(item => {
//       if (item.alreadyClicked === true) {
//         item.alreadyClicked = false;
//       }
//       return item;
//     })
//     this.setState({ count: 0 });
//   };

//   // Causes the state of the CardData object to flip from false to true and runs resetGame if true is already clicked 
// loseGame = id => {
//   this.increaseScore();
//   const CardData = this.state.CardData.map(item => {
//     if (item.id === id) {
//       if (item.alreadyClicked === false) {
//         item.alreadyClicked = true;
//       }
//       else {
//         alert("You lose!");
//         debugger;
//         this.resetGame();
//       }
//     }
//     return item;
//   });
//   this.setState({ CardData });
//   this.shuffleCards();
//   };

//   shuffleCards = () => {
//     const CardData = this.state.CardData;
//     CardData.sort(() => Math.random() - 1);
//     this.setState({ CardData });
//     console.log(CardData, this.state.CardData)
//   }

//   render(props) {
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <Jumbotron />
//         <nav className="navbar navbar-light bg-light">
//           <p style={{ margin: 'auto', textAlign: 'center' }} id="score-text">Current Score: {this.state.count}</p>
//           <br />
//           <p style={{ margin: 'auto', textAlign: 'center' }} id="top-score-text">High Score: {this.state.topCount}</p>
//         </nav>
//         <CardContainer>
//           {
//             this.state.CardData.map(item => (
//               <Cards
//                 style={{ cursor: 'pointer' }}
//                 key={item.id}
//                 id={item.id}
//                 url={item.url}
//                 loseGame={this.loseGame}
//               />
//             ))
//           }
//         </CardContainer>
//       </div>
//     )
//   }
// }

// export default Game;

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
    this.resetCounter = this.resetCounter.bind(this);
  }

  // Increases current score and matches the value of high score if it's greater than or equal to it
  increaseScore = clickedId => {
    this.setState({
      count: this.state.count + 1
    }, function () {
      if (this.state.count >= this.state.topCount) {
        this.setState({ topCount: this.state.count });
        return;
      }
      if (this.state.count === 12) {
        alert("You win!");
        this.resetGame();
        return;
      }
    }.bind(this));
  }

  checkCardData = (clickedId) => {
    this.state.CardData.map(item => {
      if (item.id === clickedId) {
        if (item.alreadyClicked === false) {
          item.alreadyClicked = true;
        }
        else {
          alert("You lose!");
          this.resetGame();
        }
      }
      return item;
    });
    this.shuffleCards();
  }

  resetCounter() {
    this.setState({ count: 0 });
  }

  resetGame = () => {
    this.resetCounter();
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
    this.increaseScore();

    this.state.CardData.map(item => {
      if (item.id === clickedId) {
        if (item.alreadyClicked === false) {
          item.alreadyClicked = true;
        }
        else {
          alert("You lose!");
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
    CardData.sort(() => Math.random() - 1);
    this.setState({ CardData });
  }

  render(props) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Jumbotron />
        <nav className="navbar navbar-light bg-light">
          <p style={{ margin: 'auto', textAlign: 'center' }} id="score-text">Current Score: {this.state.count}</p>
          <br />
          <p style={{ margin: 'auto', textAlign: 'center' }} id="top-score-text">High Score: {this.state.topCount}</p>
        </nav>
        <CardContainer>
          {
            this.state.CardData.map(item => (
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