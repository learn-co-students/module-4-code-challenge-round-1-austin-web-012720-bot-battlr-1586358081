import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

const baseUrl = 'http://localhost:6001/bots'

class BotsPage extends Component {

  constructor() {
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    fetch(baseUrl)
      .then(res => res.json())
      .then(bots => {
        let result = bots.map(ele => ({ ...ele, enlisted: false }));
        this.setState({ bots: result })
      }
      )
  }

  handleEnlistClick = (id) => {
    console.log(id);
    let bots = this.state.bots.slice(0);
    let curBot = bots.find(bot => bot.id === id);
    curBot.enlisted = !curBot.enlisted;
    this.setState({bots})
  }

  handleRemoveClick = (id) => {
    console.log('remove me');

    /// find and remove from state
    let bots = this.state.bots.slice(0);
    let res = bots.filter(bot => bot.id !== id)
    this.setState({bots: res})
    
    // remove from backend
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(json => console.log(json))

    // console.log(res);
  }


  render() {
    return <div>
      <YourBotArmy 
      enlistedBots={this.state.bots.filter(bot => bot.enlisted)} 
      handleClick={this.handleEnlistClick}
      handleRemoveClick={this.handleRemoveClick}
      />
      <BotCollection 
      bots={this.state.bots} 
      handleClick={this.handleEnlistClick}
      handleRemoveClick={this.handleRemoveClick}
      />
    </div>;
  }
}

export default BotsPage;

// - See profiles of all bots rendered in `BotCollection`.
// - Add an individual bot to my army by clicking on it. The selected bot should render in the `YourBotArmy` component. The bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.
// - Release a bot from my army by clicking on it. The bot disappears from the `YourBotArmy` component.
// - Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the `YourBotArmy` on the frontend.

// - GET: `/bots`
// - POST: `/bots`
// - DELETE: `/bots/:id`