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
    let botList = this.state.yourBots.slice()
    botList.push(bot)
    this.setState({
      yourBots: botList
    })
  }

  // Couldn't get bot removal from YourBotArmy to work fully right, still testing
  releaseBot = (bot) => {
    console.log('releasing bot')
    let botList = this.state.yourBots
    let newArray = []
    // if (botList.includes(bot)) {
      newArray = botList.splice(botList.indexOf(bot), botList.indexOf(bot) + 1)
    // }
    this.setState({
      yourBots: newArray
    })
  }

  // Method will delete bots from backend - need refresh to see, working on removing from YourBotArmy
  botDischarge = (botID) => {
    let botList = this.state.yourBots
    let newArray = []
    console.log('discharging bot')
    fetch(`${API}/${botID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      // body: JSON.stringify({
      //   id: botID
      //   }
    })
    // for (let i = botList.length-1; i++;){
    //   if (botList[i] === botID) botList.splice(i, 1);
    // }
    if (botList.includes(botID)) {
      newArray = botList.splice(botList.indexOf(botID), 1)
    }
    this.setState({
      yourBots: newArray
    })
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
