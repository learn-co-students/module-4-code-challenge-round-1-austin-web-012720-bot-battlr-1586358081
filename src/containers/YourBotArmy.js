import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  botMapper = (bots) => {
    return bots.map(robot => (
      <BotCard
        key={robot.id} 
        bot={robot} 
        addBot={this.props.removeBot}
        deleteBot={this.props.deleteBot}
      />
    ))
  }

  render() {
    console.log(this.props.bot)
    return (
      <div className="ui segment inverted olive bot-army">
      {console.log('WE MADE IT')}
            Your Bot Army
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.botMapper(this.props.bots)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
