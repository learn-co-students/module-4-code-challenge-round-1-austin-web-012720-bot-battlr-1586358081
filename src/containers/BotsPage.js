import React, { Component } from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends Component {
  constructor() {
    super()

    this.state = {
      bots: [],
      army: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:6001/bots")
      .then(res => res.json())
      .then(data => {
        this.setState({
          bots: data
        })
      })
  }

  handleArmyAdd = bot => {
    console.log(bot)
    if (this.state.army.some(armyBot => armyBot.name === bot.name)) {
      null
    } else {
      this.setState({
        army: [...this.state.army, bot]
      })
    }
  }


  deleteBot = bot => {
    console.log('remove bot')
    const id = bot.id

    fetch(`http://localhost:6001/bots/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      this.setState ({
        bots: data
      })
    })
  }

  // removeArmyBot = bot => {
  //   const newArmy = this.state.army.filter
  //   this.setState({
  //     army: newArmy
  //   })
  // }

  render() {
    return <div>
      <YourBotArmy army={this.state.army} removeArmyBot={this.removeArmyBot}/>
      <BotCollection bots={this.state.bots} deleteBot={this.deleteBot} handleArmyAdd={this.handleArmyAdd}/>
    </div>;
  }
}

export default BotsPage;
