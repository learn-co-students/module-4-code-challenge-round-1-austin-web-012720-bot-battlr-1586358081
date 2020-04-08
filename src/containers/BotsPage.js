import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    this.fetchBots();
  };

  fetchBots = () => {
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(bots => this.setState({bots}) )
  };

  addBotToArmy = (bot) => {
    this.setState({ botArmy: [...this.state.botArmy, bot] })
  };

  selectBotForArmy = (botId) => {
    let botArmy = this.state.bots.filter(bot => bot.id === botId);
    return this.setState({botArmy})
  };

  render() {
    return (
    <div>
    <YourBotArmy botArmy={this.state.botArmy}/>
    <BotCollection bots={this.state.bots} selectBot={this.selectBotForArmy}/>
    
    </div>
   )
  }
}

export default BotsPage;
