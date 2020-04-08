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

  addToBotArmy = (newBot) => {
      this.setState({ botArmy: [...this.state.botArmy, newBot] })
  }
  
  releaseBot = (botToRelease) => {
    const newArmy = this.state.botArmy.filter(bot => bot !== botToRelease)
    this.setState({botArmy: newArmy})
  }

  deleteBot = (botToDelete) => {
    const botId = botToDelete.id
    fetch(`http://localhost:6001/bots/${botId}`, {
      method: 'DELETE'
    })
    const newBotsArray = this.state.allBots.filter(bot => bot !== botToDelete)
    this.setState({ allBots: newBotsArray})
  }

  render() {
    return (
      <div>
        <YourBotArmy 
        botArmy={this.state.botArmy} 
        addToBotArmy={this.addToBotArmy} 
        deleteBot={this.deleteBot} 
        releaseBot={this.releaseBot} />
        <BotCollection 
        bots={this.state.allBots}
        botArmy={this.state.botArmy} 
        addToBotArmy={this.addToBotArmy} 
        deleteBot={this.deleteBot}
        releaseBot={this.releaseBot} 
        />
      </div>
    );
  }
}

export default BotsPage;
