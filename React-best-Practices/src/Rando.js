import React, { Component } from "react";

export default class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ number: rand });
    }, 1000);
  }
  render() {
    return <h2>{this.state.number}</h2>;
  }
}
