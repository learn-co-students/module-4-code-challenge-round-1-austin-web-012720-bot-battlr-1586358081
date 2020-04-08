import React, { Component } from "react";
import BotCard from "../components/BotCard";
import YourBotCard from "../components/YourBotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.yourBots.map((bot, index) => {
              return <YourBotCard
                key={index}
                bot={bot}
                releaseBot={this.props.releaseBot}
              >
              </YourBotCard>
            }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
