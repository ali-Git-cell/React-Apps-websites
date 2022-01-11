import React from "react";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", { class: "Muma" }, props.name),
//     React.createElement("h2", { class: "Luna" }, props.animal),
//     React.createElement("h2", { class: "Buma" }, props.breed),
//   ]);
// };

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet;
