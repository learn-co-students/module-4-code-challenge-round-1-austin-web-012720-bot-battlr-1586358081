import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends Component {
  //your code here
  constructor(props) {
    super(props);
    this.state = { 
     };
  }

  getCards = () =>{
    return this.props.bots.map(bot => {
      return <BotCard 
      key={bot.id} 
      bot={bot} 
      setBot={this.props.setBot} 
      removeFromBotArmy={this.props.removeFromBotArmy} 
      />
     })
  }

  render() {
    if(!this.props.currentBot.id){
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.getCards()}
        </div>
      </div>
    ) } else {
      return(
        <BotSpecs
        bot={this.props.currentBot}
        addToBotArmy={this.props.addToBotArmy}
        clearBot={this.props.clearBot}
        />
      )
    }
  }
}

export default BotCollection;
