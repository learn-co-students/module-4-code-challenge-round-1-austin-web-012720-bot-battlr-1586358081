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
        this.setState({
          bots: data
        })
      })
  }

  handleArmyRemove = bot => {
    const index = this.state.army.indexOf(bot)
    const army = this.state.army
    const newArmy = this.state.army.splice(index, 1)
    if (index > -1) {
      newArmy.splice(index, 1)
      this.setState({
        army: army
      })
    }
    //  ¯\_(ツ)_/¯
  }

  render() {
    return <div>
      <YourBotArmy army={this.state.army} deleteBot={this.deleteBot} handleArmyRemove={this.handleArmyRemove} />
      <BotCollection bots={this.state.bots} handleArmyAdd={this.handleArmyAdd} />
    </div>;
  }
}

export default BotsPage;
