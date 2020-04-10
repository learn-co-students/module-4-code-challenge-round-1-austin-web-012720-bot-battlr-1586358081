import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  constructor() {
    super();

    this.state = {
      bots: [],
    };
  }

  componentDidMount() {
    const URL = "http://localhost:6001/bots";

    fetch(URL)
      .then((response) => response.json())
      .then((bots) =>
        this.setState({
          bots,
        })
      );
  }

  addBot = (bot) => {
    console.log("Adding bot", bot.id);
    this.setState({
      bots: this.state.bots.map((robot) =>
        robot.id === bot.id ? { ...robot, added: true } : robot
      ),
    });
  };

  removeBot = (bot) => {
    console.log("Removing bot", bot.id);
    this.setState({
      bots: this.state.bots.map((robot) =>
        robot.id === bot.id ? { ...robot, added: false } : robot
      ),
    });
  };

  destroyBot = (bot) => {
    console.log("Destroying bot", bot.id);
    const newBots = this.state.bots.filter((robot) => robot.id !== bot.id);
    this.setState({ bots: newBots });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.bots.filter((robot) => robot.added)}
          removeBot={this.removeBot}
          destroyBot={this.destroyBot}
        />
        <BotCollection
          bots={this.state.bots}
          addBot={this.addBot}
          destroyBot={this.destroyBot}
        />
      </div>
    );
  }
}

export default BotsPage;
