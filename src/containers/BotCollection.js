import React, { Component } from "react";
import BotCard from '../components/BotCard';
import BotSpecs from '../components/BotSpecs';

class BotCollection extends Component {
  //your code here
  state = {
    specsBot: null
  }

  render() {
    return (
      <div className="ui four column grid">
        Collection of all bots
        <div className="row">
          {this.state.specsBot ?
            <BotSpecs bot={this.state.specsBot} addToArmy={(bot) => {this.setState({specsBot: null}); this.props.addToArmy(bot)}} noEnlist={() => this.setState({specsBot: null})}/> :
            this.props.bots.map(bot => (
              <BotCard key={bot.id}
                bot={bot}
                handleClickCard={(specsBot) => this.setState({specsBot})}
                handleDeleteBot={this.props.handleDeleteBot}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default BotCollection;
