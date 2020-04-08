import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
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
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.mapBots(this.props.bots)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
