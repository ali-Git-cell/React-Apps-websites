import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        onClick={function (e) {
          alert("you clicked me Amigo");
        }}
      >
        Button
      </button>
    );
  }
}
