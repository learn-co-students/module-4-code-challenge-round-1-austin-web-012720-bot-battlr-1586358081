import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class YourBotArmy extends Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.map(bot => {
              <BotCard key={this.props.bot.id} bot={this.props.bot} army={this.props.army}/> 
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
