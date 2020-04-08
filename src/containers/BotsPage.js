import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const URL = "http://localhost:6001/bots";

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      bots: [],
      botArmy: [],
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

  addToArmy = (bot) => {
    this.setState({ botArmy: [...this.state.botArmy, bot ]})
    console.log(this.props.botArmy)

  };

  render() {
    console.log(this.state.bots);
    return (
      <div>
        <YourBotArmy
          bots={this.state.bots}
          botArmy={this.state.botArmy}
          addToArmy={this.addToArmy}
        />
        <BotCollection
          bots={this.state.bots}
          botArmy={this.state.botArmy}
          addToArmy={this.addToArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
