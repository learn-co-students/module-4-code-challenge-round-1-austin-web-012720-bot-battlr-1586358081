import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => 
          <BotCard 
          bot={bot} 
          key={bot.id} 
          handleEnlistClick={this.props.handleClick}
          handleRemoveClick={this.props.handleRemoveClick}
          handleCardClick={this.props.handleCardClick}
          /> )}
        </div>
      </div>
    );
  }
}

export default BotCollection;
