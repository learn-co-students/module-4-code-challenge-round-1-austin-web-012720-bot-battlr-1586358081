import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"; 
import BotCard from "../components/BotCard";

class BotsPage extends Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      yourBots: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({ bots }))
  }

  giveTeam = () => {
    let newBots = this.state.bots.map(bot => ({...bot, onTeam: false}))
    this.setState({
      bots: newBots
    })
    console.log(this.state.bots)
  }

  addToTeam(bot) {
    this.setState({
      yourBots: [...this.state.yourBots, bot]
    })
    console.log(this.state.yourBots)
  }

  deleteBot(id) {
    return fetch(`http://localhost:6001/bots/${id}`, {
      method: 'delete'
    })
    .then(resp => resp.json())
  }


  render() {
    return <div>
    {this.giveTeam}
    <YourBotArmy addToTeam={this.addToTeam}  />
    <BotCollection bots={this.state.bots} deleteBot={this.deleteBot}/>
    </div>;
  }
}

export default BotsPage;
