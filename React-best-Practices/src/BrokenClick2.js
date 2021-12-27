import React, { Component } from "react";

export default class BrokenClick extends Component {
  state = { clicked: false };

  handleClick = (e) => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "clicked2" : "Not Clicked2"}</h1>
        <button onClick={this.handleClick}>BrokenClick</button>
      </div>
    );
  }
}

// here it is the option of binding which is done automatically with the handleclick function and shorter syntax. alternative to what was used in brokenclick1
