import React, { Component } from "react";
import BotCard from "../components/BotCard";
class YourBotArmy extends Component {
  //your bot army code here...

  getCards = () => {
    return this.props.bots.map((bot) => {
      return <BotCard 
      key={bot.id} 
      bot={bot} 
      setBot={this.props.setBot} 
      removeFromBotArmy={this.props.removeFromBotArmy} />;
    });
  };
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {/* <Card.Group itemsPerRow={3}> */}
              {this.getCards()}
              {/* </Card.Group> */}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
