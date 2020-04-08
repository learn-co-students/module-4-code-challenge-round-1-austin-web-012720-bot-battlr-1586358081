import React, { Component } from "react";
import BotCard from "../components/BotCard";


class BotCollection extends Component {

  render() {
    const theBots = this.props.bots;

    return (
      <div className="ui four column grid">
        <div className="row">
          {theBots.map(bot => (
            <BotCard key={bot.id} bot={bot} army={this.props.army}/>
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
