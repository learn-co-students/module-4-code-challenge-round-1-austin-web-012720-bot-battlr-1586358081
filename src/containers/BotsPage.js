import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const BASE_URL = 'http://localhost:6001';
const BOTS_URL = `${BASE_URL}/bots`
class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
  }

  fetchBots = () => {
    console.log('fetching bots')
    fetch(BOTS_URL)
      .then(res => res.json())
      .then(bots => this.setState({ bots }))
  }

  deleteBot = (bot) => {
    this.removeFromArmy(bot);
    
    fetch(`${BOTS_URL}/${bot.id}`,{
      method: 'DELETE'
    })
    .then(this.fetchBots())
  }

  addToArmy = (bot) => {
    console.log('add to army', bot)
    if (!this.state.army.includes(bot)) {
      this.setState({ army: [...this.state.army, bot] })
    }
  }

  removeFromArmy = (removeBot) => {
    console.log('remove from army', removeBot)
    const army = this.state.army.filter(bot => bot != removeBot)
    this.setState({ army })
  }

  componentDidMount() {
    console.log('bots page mounted')
    this.fetchBots();
  }

  render() {
    // console.log('bots page rendering')
    return <div>
      <YourBotArmy bots={this.state.army} handleClickCard={this.removeFromArmy} handleDeleteBot={this.deleteBot}/>
      <BotCollection bots={this.state.bots} handleClickCard={this.addToArmy} handleDeleteBot={this.deleteBot}/>
    </div>
  }
}

export default BotsPage;
