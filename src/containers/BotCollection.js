import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
constructor(props){
  super()
  this.state = {
    clicked: false
  }
}
  handleClick = (event) => {
    console.log("Bot was clicked...")
    this.setState({
      clicked: !this.state.clicked
    })
    this.props.addToArmy(event)

  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map((bot) => {
            return (
              <BotCard
                key={bot.id}
                bot={bot}
                clicked={this.state.clicked}
                handleClick={this.handleClick}
              />
            );
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
