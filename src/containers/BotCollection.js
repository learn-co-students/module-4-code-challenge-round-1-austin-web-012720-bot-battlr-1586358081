import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  botMapper = (bots) => {
    console.log(bots)
    return bots.map(robot => (
      <BotCard
        key={robot.id} 
        bot={robot} 
        addBot={this.props.addBot}
        deleteBot={this.props.deleteBot}
      />
    ))
  }

  render() {
    console.log(this.props.robots)
    return (
      <div className="ui four column grid">
      Collection of all bots
        <div className="row">
        {this.botMapper(this.props.robots)}          
        </div>
      </div>
    );
  }
}

export default BotCollection;
