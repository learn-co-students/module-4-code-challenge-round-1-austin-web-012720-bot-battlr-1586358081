import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard key={bot.id} bot={bot} toggleSelectBot={this.props.toggleSelectBot} dischargeBot={this.props.dischargeBot}></BotCard>
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
