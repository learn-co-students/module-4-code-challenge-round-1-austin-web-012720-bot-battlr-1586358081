import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      addedBots: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(bots => {
        this.setState({ bots: bots })
      })
  }

  addBotToMyArmy = (bot) => {
    if (!this.state.addedBots.includes(bot)){
      this.setState({
        addedBots: [...this.state.addedBots, bot]
      })
    } 
    // else if (this.state.addedBots.includes(bot)) {
    //   const botIndex = this.state.addedBots.indexOf(bot)
    //   if (botIndex >  -1){
    //     this.state.addedBots.splice(botIndex, 1)
    //   }
    // }
  }

  // removeBotFromMyArmy = (bot) => {
  //   const botIndex = this.state.addedBots.indexOf(bot)
  //   if (botIndex >  -1){
  //     this.state.addedBots.splice(botIndex, 1)
  //   }
  // }

  removeBotForever = (bot) => {
    return fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
  }


  render() {
    return( 
    <div>
      <YourBotArmy myBots={this.state.addedBots} removeBot={this.removeBotFromMyArmy}/>
      <BotCollection bots={this.state.bots} addBot={this.addBotToMyArmy} deleteBotForever={this.removeBotForever}/>
    </div>
    )
  }
}

export default BotsPage;
