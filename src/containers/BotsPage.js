import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy';

const API_URL = 'http://localhost:6001/bots';

class BotsPage extends Component {
  constructor() {
    super()

    this.state = {
      bots: [],
      army: []
    };
  };

  componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(bots => this.setState({ bots }))
  };

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army}/>
        <BotCollection bots={this.state.bots} army={this.state.army} />
      </div>
    );
  }
}

export default BotsPage;
