import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-logo" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Japanese",
    }),
    React.createElement(Pet, {
      name: "Peacock",
      animal: "Bird",
      breed: "Malaysian",
    }),
    React.createElement(Pet, {
      name: "Falcon",
      animal: "Eagel",
      breed: "American",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
