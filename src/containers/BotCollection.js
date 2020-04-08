import React, { Component } from "react";
import BotCard from "../components/BotCard";

const URL = 'http://localhost:6001/bots';

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(
            bot => <BotCard bot={bot} addBot={this.props.addBot} 
            deleteBot={this.props.deleteBot} clickable={true}/>)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
