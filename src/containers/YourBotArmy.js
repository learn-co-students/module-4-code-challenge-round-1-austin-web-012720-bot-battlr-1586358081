import React, { Component } from "react";
import BotCard from '../components/BotCard';

class YourBotArmy extends Component {

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map(bot => <BotCard 
            key={bot.id} 
            botArmy={this.props.botArmy}
            bot={bot} 
            addToBotArmy={this.props.addToBotArmy}
            deleteBot={this.props.deleteBot}
            releaseBot={this.props.releaseBot}/>)}
            
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
