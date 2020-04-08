import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const botsAPI = `http://localhost:6001/bots`;
class BotsPage extends Component {
  state = {
    bots: [],
    armyBots: [],
  };

  toggleBotToArmy = (bot) => {
    let index = this.state.armyBots.indexOf(bot);
    if (index < 0) {
      this.setState({ armyBots: [...this.state.armyBots, bot] });
    }
  };

  removeBotFromArmy = (bot) => {
    let index = this.state.armyBots.indexOf(bot);
    this.setState(this.state.armyBots.splice(index, 1));
  };

  deleteBot = (bot) => {
    fetch(botsAPI + "/" + bot.id, {
      method: "DELETE",
    });
  };

  removeBot = (bot) => {
    if (window.confirm("Are you sure? This will delete them forever...")){
    let index = this.state.armyBots.indexOf(bot);
    if (index > -1) {
      this.setState(this.state.armyBots.splice(index, 1));
    }
    this.deleteBot(bot);
    this.fetchBots();
  }
  };
  fetchBots = () => {
    fetch(botsAPI)
      .then((res) => res.json())
      .then((bots) => this.setState({ bots }));
  };

  componentDidMount() {
    this.fetchBots();

  }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.armyBots}
          addBot={this.removeBotFromArmy}
          removeBot={this.removeBot}
        />
        <BotCollection
          bots={this.state.bots}
          addBot={this.toggleBotToArmy}
          removeBot={this.removeBot}
        />
      </div>
    );
  }
}

export default BotsPage;
