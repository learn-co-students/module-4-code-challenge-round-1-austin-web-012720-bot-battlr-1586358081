import React, { Component } from "react";
import BotCard from "../components/BotCard";


class BotCollection extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   yourbotarmy: false
    // };
  };

  render() {
    const theBots = this.props.bots;
    let yourbotarmy = this.props.yourbotarmy;

    return (
      <div className="ui four column grid">
        <div className="row">
          {theBots.map(bot => (
            <BotCard key={bot.id} bot={bot} yourbotarmy={this.props.yourbotarmy}/>
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
