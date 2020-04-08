import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class YourBotArmy extends Component {

  armyMapping = (army) => {
    return army.map(armyBot => (
      <BotCard key={armyBot.id} bot={armyBot} />
    ))
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.armyMapping(this.props.army)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
