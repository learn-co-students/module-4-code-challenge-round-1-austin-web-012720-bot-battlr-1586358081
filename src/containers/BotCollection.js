import React, { Component } from "react";
import BotCard from '../components/BotCard';

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => <BotCard 
          key={bot.id} bot={bot} 
          botArmy={this.props.botArmy}
          addToBotArmy={this.props.addToBotArmy} 
          deleteBot={this.props.deleteBot}
          releaseBot={this.props.releaseBot}/>)}
          
        </div>
      </div>
    );
  }
}

export default BotCollection;
