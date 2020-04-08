import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  constructor() {
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({ bots }))
  }

  render() {
    return <div>
    <YourBotArmy/>
    <BotCollection bots={this.state.bots}/>
    </div>;
  }
}

export default BotsPage;
