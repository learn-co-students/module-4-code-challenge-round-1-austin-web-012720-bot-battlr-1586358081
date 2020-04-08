import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

const url = 'http://localhost:6001/bots';

class BotsPage extends Component {

  constructor(){
    super();
    this.state ={
      bots: [],
      army: []
    }
  }

  fetchBots = () => {
    fetch(url)
    .then(resp => resp.json())
    .then((bots) => this.setState({ bots }))
  }

  dischargeBot = bot => {
    fetch(url + `/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: bot.id})
    })
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        this.fetchBots();
      })
  }

  toggleSelectBot = bot => {
    if (!this.state.army.includes(bot)){
      this.setState({
        army: [...this.state.army, bot]
      })
    } else {
      const index = this.state.army.indexOf(bot);
      this.state.army.splice(index, 1)
      this.setState({
        army: this.state.army
      })
    }
  }

  componentDidMount(){
    this.fetchBots();
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          army={this.state.army} 
          toggleSelectBot={this.toggleSelectBot} 
          dischargeBot={this.dischargeBot} 
        />
        <BotCollection 
          bots={this.state.bots} 
          toggleSelectBot={this.toggleSelectBot} 
          dischargeBot={this.dischargeBot} 
        />
      </div>
    )
  }
}

export default BotsPage;
