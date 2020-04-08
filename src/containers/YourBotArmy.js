import React, { Component } from "react";
import BotCard from '../components/BotCard'
// import BotSpecs from '../components/BotSpecs'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.enlistedBots.map(bot => 
            <BotCard 
            bot={bot} 
            key={bot.id} 
            handleEnlistClick={this.props.handleClick}
            handleRemoveClick={this.props.handleRemoveClick}
            />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
