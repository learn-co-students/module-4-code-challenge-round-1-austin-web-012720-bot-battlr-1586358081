import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "http://localhost:6001/bots"

class BotsPage extends Component {
  constructor() {
    super();

    this.state = {
      botList: [],
      yourBots: [],
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          botList: data
        })
      })
  }

  selectBot = (bot) => {
    console.log('adding bot')
    let botList = this.state.yourBots.slice()
    botList.push(bot)
    this.setState({
      yourBots: botList
    })
  }

  releaseBot = (bot) => {
    let yourBotsArray = this.state.yourBots;
    let yourBotsIndex = this.state.yourBots.indexOf(bot);
    console.log(yourBotsIndex)
    if (yourBotsIndex > -1) {
      yourBotsArray.splice(yourBotsIndex, 1);
      this.setState({
        yourBots: yourBotsArray
      })
    }
  }

  botDischarge = (bot) => {
    console.log('discharging bot')
    this.releaseBot(bot)
    console.log('deleting bot')
    fetch(`${API}/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => this.componentDidMount())
  }

  render() {
    return <div>
      <YourBotArmy
        yourBots={this.state.yourBots}
        releaseBot={this.releaseBot}
        yourBots={this.state.yourBots}
      />
      <BotCollection
        bots={this.state.botList}
        selectBot={this.selectBot}
        yourBots={this.state.yourBots}
        botDischarge={this.botDischarge}
      />
    </div>;
  }
}

export default BotsPage;
