import React, { Component } from "react";
import BotCard from "../components/BotCard"

class YourBotArmy extends Component {

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.map(bot => (
              <BotCard key={bot.id} bot={bot} toggleSelectBot={this.props.toggleSelectBot} dischargeBot={this.props.dischargeBot}></BotCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
