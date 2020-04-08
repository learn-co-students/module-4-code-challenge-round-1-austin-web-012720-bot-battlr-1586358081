import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => {
            return <BotCard key={bot.id} bot={bot} deleteBot={this.props.deleteBot} handleImgClick={this.props.handleArmyAdd}/>
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
