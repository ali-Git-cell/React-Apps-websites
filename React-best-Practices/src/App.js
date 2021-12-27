import React, { Component } from "react";
import "./App.css";
import Game from "./Game";
import Demo from "./Demo";
import Rando from "./Rando";
import Rand2 from "./Rand2";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import BrokenClick2 from "./BrokenClick2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game color="Apple" />
        <Demo food="Pineapple" animal="Dog" />
        <Rando maxNum={8} />
        <Button />
        <BrokenClick />
        <BrokenClick2 />
        <Rand2 />
      </div>
    );
  }
}

export default App;
