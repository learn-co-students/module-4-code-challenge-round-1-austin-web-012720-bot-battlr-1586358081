import React, { Component } from "react";
import BotCard from '../components/BotCard';

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
            Your Bot Army
          <div className="row bot-army-row">
            {this.props.bots.map(bot => (
            <BotCard key={bot.id}
              bot={bot}
              handleClickCard={this.props.handleClickCard}
              handleDeleteBot={this.props.handleDeleteBot}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
