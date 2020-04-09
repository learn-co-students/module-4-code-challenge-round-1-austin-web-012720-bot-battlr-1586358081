import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const URL = "http://localhost:6001/bots";

class BotsPage extends Component {
  constructor() {
    super();

    this.state = {
      bots: [],
    };
  }

  componentDidMount() {
    this.fetchBots();
    console.log("Component mounted...");
  }

  fetchBots = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((bots) => {
        this.setState({ bots });
      });
    console.log("Bots fetched...");
  };

  addToArmy = (bot) => {
    console.log("Adding to Army...", bot.id);
    this.setState({
      bots: this.state.bots.map((robot) =>
        robot.id === bot.id ? { ...robot, enlisted: true } : robot
      ),
    });
  };

  removeFromArmy = (bot) => {
    console.log("Removing from Army...", bot.id);
    this.setState({
      bots: this.state.bots.map((robot) =>
        robot.id === bot.id ? { ...robot, enlisted: false } : robot
      ),
    });
  };

  handleDestroy = (bot) => {
    console.log("Destroying...", bot.id)
    const newBots = this.state.bots.filter((robot) => robot.id !== bot.id);
    this.setState({ bots: newBots });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.bots.filter((robot) => robot.enlisted)}
          removeFromArmy={this.removeFromArmy}
          handleDestroy={this.handleDestroy}
        />
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} 
        handleDestroy={this.handleDestroy}
        />
      </div>
    );
  }
}

export default BotsPage;
