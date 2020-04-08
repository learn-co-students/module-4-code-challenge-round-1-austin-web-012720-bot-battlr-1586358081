import React, { Component } from 'react'
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      robots: [],
      armyBots: []
    }
  }

  setRobots = (robots) => {
    this.setState({
      robots
    })
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(data => this.setRobots({data}))
  }
  handleClick = (bot) => {
  console.log("clicked!")
    // this.setState({
    //   // armyBots: bot
    // })
  }

  render () {
    return <div>
      <YourBotArmy bots={this.state.armyBots} />
      <BotCollection robots={this.state.robots} callback={this.handleClick}/>
    </div>
  }
}

export default BotsPage
