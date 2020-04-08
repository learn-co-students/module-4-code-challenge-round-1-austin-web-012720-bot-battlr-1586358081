import React, { Component } from "react";
import BotCard from '../components/BotCard';

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
          Collection of all bots
        <div className="row">
          {this.props.bots.map(bot => (
          <BotCard key={bot.id}
            bot={bot}
            handleClickCard={this.props.handleClickCard}
            handleDeleteBot={this.props.handleDeleteBot}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
