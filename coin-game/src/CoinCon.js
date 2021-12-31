import React, { Component } from 'react'
import {choice} from "./helper";
import Coin from "./Coin"

export default class CoinCon extends Component {
    static defaultProps = {
       coins: [        
        {side: "heads", imgUrl: "https://tinyurl.com/react-coin-heads-jpg"},
        {side: "tails", imgUrl: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
    }
    constructor(props) {
        super(props);
        this.state = {
            curCoins: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

flipCoin(){
  const newCoin = choice(this.props.coins);
  this.setState(st => {
        return {
        curCoins: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1:0),
        nTails: st.nHeads + (newCoin.side === "nTails" ? 1:0)
      }
  })
}    
handleClick(e){
    this.flipCoin();
}


render() {
        return (
            <div className="coinCon">
                <h2>Lets Flip it, the damm coin!</h2>
                <button onClick={this.handleClick}>Flip the coin</button>
                {this.state.curCoins && <Coin info={this.state.curCoins}/>}
                <p>Out of {this.state.nFlips} flips, there are {this.state.nHeads} heads and {this.state.nTails} tails.</p>
                
            </div>
        )
    }
}
