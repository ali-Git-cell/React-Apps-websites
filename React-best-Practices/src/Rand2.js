import React, { Component } from "react";

export default class Rand2 extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.genRandom = this.genRandom.bind(this);
  }

  genRandom() {
    let num2 = Math.floor(Math.random() * 10 + 1);
    this.setState({ num: num2 });
  }

  render() {
    return (
      <div>
        <h1 className="App"> Number is: {this.state.num}</h1>
        {this.state.num === 7 && <h2>You Win</h2>}
        {this.state.num !== 7 && (
          <button onClick={this.genRandom}>Random Number</button>
        )}
      </div>
    );
  }
}
