import React, { Component } from "react";
import "./Pokecard.css";
// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export default class Pokecard extends Component {
  render() {
    let imgeSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Poke-title">{this.props.name}</h1>
        <img src={imgeSrc} alt={this.props.name} />
        <div className="Poke-data">TYPE: {this.props.type}</div>
        <div className="Poke-data">XPS: {this.props.exp}</div>
      </div>
    );
  }
}
