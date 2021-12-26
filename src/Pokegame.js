import React, { Component } from "react";
import Pokedex from "./Pokedex";

export default class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    let hd1 = [];
    let hd2 = [...this.props.pokemon];
    while (hd1.length < hd2.length) {
      let randX = Math.floor(Math.random() * hd2.length);
      let randP = hd2.splice(randX, 1)[0];
      hd1.push(randP);
    }

    let ex1 = hd1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let ex2 = hd2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokemon={hd1} exp={ex1} winner={ex1 > ex2} />
        <Pokedex pokemon={hd2} exp={ex2} winner={ex2 > ex1} />
      </div>
    );
  }
}
