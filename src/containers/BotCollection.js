import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map((bot) => {
            return (
              <BotCard
                key={bot.id}
                bot={bot}
                addToArmy={this.props.addToArmy}
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
