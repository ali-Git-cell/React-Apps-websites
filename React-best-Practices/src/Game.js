import React, { Component } from "react";

export default class Game extends Component {
  state = {
    score: 89,
    gameOver: false,
  };

  render() {
    return (
      <div>
        <h1> Your score is: {this.state.score}</h1>
      </div>
    );
  }
}
