import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API_URL = "http://localhost:6001/bots";
class BotsPage extends Component {
  //start here with your code for step one

  constructor() {
    super();
    this.state = {
      currentBot: {},
      bots: [],
      army: [],
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((bots) => this.setState({ bots: bots }));
  }

  addToBotArmy = (bot) => {
    this.setState({
      army: [...this.state.army, bot],
    });
  };

  removeFromBotArmy = (bot) => {
    let armyArr = [...this.state.army];
    let i = armyArr.indexOf(bot);
    armyArr.splice(i, 1);
    this.setState({
      army: armyArr,
    });
  };

  setBot = (bot) => {
    console.log(bot);
    this.setState({ currentBot: bot });
  };

  clearBot = () => {
    this.setState({ currentBot: {} });
  };

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          bots={this.state.army}
          currentBot={this.state.currentBot}
          setBot={this.setBot}
          clearBot={this.clearBot}
          removeFromBotArmy={this.removeFromBotArmy}
          addToBotArmy={this.addToBotArmy}
        />
        <BotCollection
          bots={this.state.bots}
          currentBot={this.state.currentBot}
          setBot={this.setBot}
          clearBot={this.clearBot}
          addToBotArmy={this.addToBotArmy}
          removeFromBotArmy={this.removeFromBotArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
