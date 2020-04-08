import React, { Component } from "react";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          <h1>Collection of all bots</h1>
          {this.props.bots.map(bot => <BotSpecs bot={bot} key={bot.id} selectBot={this.props.selectBot}/>)}
          
        </div>
      </div>
    );
  }
}

export default BotCollection;
