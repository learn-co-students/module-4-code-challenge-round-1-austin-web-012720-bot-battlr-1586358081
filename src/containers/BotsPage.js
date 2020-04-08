import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const URL = 'http://localhost:6001/bots';

class BotsPage extends Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(bots => this.setState({ bots }))
  }

  addBotToArmy = (bot) => {
    if (!this.state.botArmy.includes(bot)) {
      this.setState(prevState => {
        return {
          botArmy: [...prevState.botArmy, bot]
        }
      })
    }
  }

  deleteBot = (bot) => {
    console.log('delete?')
    const configObj = {
      method: 'DELETE'
    }

    const array = this.state.bots
    const index = array.indexOf(bot);

    const arrayArmy = this.state.botArmy;
    const indexArmy = arrayArmy.indexOf(bot);

    if (index > -1) {
      array.splice(index, 1);
      arrayArmy.splice(indexArmy, 1);
      this.setState({
        bots: array,
        botArmy: arrayArmy
      })
    }

    fetch(`${URL}/${bot.id}`, configObj)
      .then(resp => resp.json())
      .then(json => { console.log(json); })
  }

  releaseBot = (bot) => {
    console.log('release?');
    const array = this.state.botArmy;
    const index = array.indexOf(bot);
    if (index > -1) {
      array.splice(index, 1);
      this.setState({
        botArmy: array
      })
    }
  }



  render() {
    return <div>
      <BotCollection bots={this.state.bots} addBot={this.addBotToArmy} deleteBot={this.deleteBot}/>
      <YourBotArmy bots={this.state.botArmy} releaseBot={this.releaseBot}/>

    </div>;
  }
}

export default BotsPage;
