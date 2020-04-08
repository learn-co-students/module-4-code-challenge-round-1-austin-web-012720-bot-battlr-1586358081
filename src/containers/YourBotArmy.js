import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
      {console.log('WE MADE IT')}
            Your Bot Army
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/* {<BotCard bot={this.props.bot}/>} */}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
