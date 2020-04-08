import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  constructor(){
    super()
    this.state = {
      allBots: [],
      botArmy: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(response => response.json())
    .then(results => this.setState({ allBots: results}))  
  }

  addToBotArmy = (bot) => {
    if(!this.state.botArmy.includes(bot)){
      this.setState({ botArmy: [...this.state.botArmy, bot] })
    }
  }

  releaseBot = (botToDelete) => {
    const newArmy = this.state.botArmy.filter(bot => bot !== botToDelete)
    this.setState({botArmy: newArmy})
  }

  deleteBot = (bot) => {
    const botId = bot.id
    fetch(`http://localhost:6001/bots/${botId}`, {
      method: 'DELETE',

    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy}  />
        <BotCollection bots={this.state.allBots} addToBotArmy={this.addToBotArmy} deleteBot={this.deleteBot}/>
      </div>
    );
  }
}

export default BotsPage;
