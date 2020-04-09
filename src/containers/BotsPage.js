import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";
import SortBar from "../components/SortBar";

const BASE_URL = 'http://localhost:6001';
const BOTS_URL = `${BASE_URL}/bots`;
const sortByKey = {
  forward: (array, key) => {
    return array.sort((a, b) => a[key] - b[key])
  },
  reverse: (array, key) => {
    return array.sort((a, b) => b[key] - a[key])
  }
}

const filterMethods = {

}

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    filters: [],
  }

  fetchBots = () => {
    console.log('fetching bots')
    fetch(BOTS_URL)
      .then(res => res.json())
      .then(bots => this.setState({ bots }))
  }

  deleteBot = (bot) => {
    fetch(`${BOTS_URL}/${bot.id}`, {
      method: 'DELETE'
    })
      .then(this.fetchBots())
  }

  filteredBots = () => {
    if (this.state.filters.length !== 0) {
      return this.state.filters.map(botClass =>
        this.state.bots.filter(bot => bot.bot_class === botClass)
      ).flat(1)
    } else {
      return this.state.bots
    }
  }

  adjustArmy = (bot, tf) => {
    const bots = this.state.bots.map(b => bot.id === b.id ? { ...b, enlisted: tf } : b)
    this.setState({ bots });
  }

  componentDidMount() {
    console.log('bots page mounted')
    this.fetchBots();
  }

  render() {
    return <div>
      <YourBotArmy bots={this.state.bots.filter(bot => bot.enlisted)} handleClickCard={(bot) => this.adjustArmy(bot, false)} handleDeleteBot={this.deleteBot} />
      <SortBar
        handleFilter={(e) => this.setState({
          filters:
            e.target.checked ?
              [...this.state.filters, e.target.name] :
              this.state.filters.filter(botType => botType !== e.target.name)
        })}
      />
      <BotCollection bots={this.filteredBots()} addToArmy={(bot) => this.adjustArmy(bot, true)} handleDeleteBot={this.deleteBot} />
    </div>
  }
}

export default BotsPage;
