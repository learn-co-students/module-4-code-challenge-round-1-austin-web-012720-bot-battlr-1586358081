import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy';

const API_URL = 'http://localhost:6001/bots';

class BotsPage extends Component {
  constructor() {
    super()

    this.state = {
      bots: [],
      yourbotarmy: false
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
        <YourBotArmy yourbotarmy={this.state.yourbotarmy}/>
        <BotCollection bots={this.state.bots} yourbotarmy={this.state.yourbotarmy} />
      </div>
    );
  }
}

export default BotsPage;
