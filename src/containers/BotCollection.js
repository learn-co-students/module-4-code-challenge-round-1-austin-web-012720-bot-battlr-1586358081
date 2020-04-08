import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {

  handleClick = (event) => {
    console.log("Bot was clicked...")
    this.setState({
      botArmy: []
      // Tried to add the event.target.value to the botArmy
      // use [...this.state.botArmy, "something"]
    })
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
