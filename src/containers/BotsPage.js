import React, { Component } from 'react'
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends Component {
  //start here with your code for step one
  constructor () {
    super()
    this.state = {
      robots: [],
      armyBots: []
    }
  }
  
  componentDidMount () {
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(robots => this.setState({ robots }))
  }

  addBot = bot => {
    if (!this.state.armyBots.includes(bot)) {
      this.setState({
        armyBots: [...this.state.armyBots, bot]
      })
    }
  }

  removeBot = bot => {
    let index = this.state.armyBots.indexOf(bot)
    if (index > -1) {
      this.setState(this.state.armyBots.splice(index, 1))
    }
  }

  deleteBot = bot => {
    fetch('http://localhost:6001/bots'+'/'+ bot.id,{
    method: 'DELETE', 
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
    })
  }


  render () {
    // if (this.state.robots.length){
    return (
      <div>
        <YourBotArmy bots={this.state.armyBots} removeBot={this.removeBot} deleteBot={this.deleteBot}/>
        <BotCollection robots={this.state.robots} addBot={this.addBot} deleteBot={this.deleteBot}/>
      </div>
    )
    // }
  }
}

export default BotsPage
