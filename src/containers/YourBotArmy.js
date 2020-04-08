import React, { Component } from "react";
import BotSpecs from '../components/BotSpecs.js'
import BotCard from '../components/BotCard.js'


class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.army.map(bot => {
             return <BotCard key={bot.id} bot={bot} deleteBot={this.deleteBot}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
