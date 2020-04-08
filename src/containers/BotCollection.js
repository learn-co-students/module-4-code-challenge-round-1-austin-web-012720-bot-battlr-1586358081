import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map((bot, index) => {
          return<BotCard 
          key = {index}
          bot = {bot}
          id = {bot.id}
          yourBots = {this.props.yourBots}
          selectBot = {this.props.selectBot}
          botDischarge = {this.props.botDischarge}
          >
          </BotCard>}
          )}
        </div>
      </div>
    );
  }
}

export default BotCollection;
