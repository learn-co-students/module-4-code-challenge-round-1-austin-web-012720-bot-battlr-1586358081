import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  constructor(props) {
    super()
    this.state = {
      yourBotIds: []
    }
  }

  addToArmy = (event) => {
    console.log('tried to add bot')
    console.log(event)
    // this.setState({
    //   yourBots: this.state.yourBots.push(event)
    // })
  }

  //damn robots

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {<BotCard bots={this.state.yourBots}/>}    
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
