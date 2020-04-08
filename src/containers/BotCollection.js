import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  mapBots = (bots) => {
    return bots.map((bot) => (
      <BotCard
        key={bot.id}
        bot={bot}
        addBot={this.props.addBot}
        removeBot={this.props.removeBot}
      />
    ));
  };
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.mapBots(this.props.bots)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
