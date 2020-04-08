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
    console.log(this.state.bots);
  }

  fetchBots = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((bots) => {
        this.setState({ bots });
      });
    console.log("Bots fetched...");
  };

  addToArmy = () => {
    console.log("Adding to army...");
  };

  render() {
    console.log(this.state.bots);
    return (
      <div>
        <YourBotArmy
          bots={
            this.state.bots.filter(function (bot) {
              return bot 
            }) // return bot with state.clicked === true
          }
        />
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} />
      </div>
    );
  }
}

export default BotsPage;
