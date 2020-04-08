import React, { Component } from "react";
import BotCard from '../components/BotCard'
class BotCollection extends Component {

  handleclick = event =>{
    console.log(event)
  }

  render() {
    const card = this.props.bots.map((bot,key)=> {
        return  <BotCard  bot={bot} key={key}
          addF={this.props.addToCollection}
          delete={this.props.deleteBot}

        />
    })
      //
    return (
      <div className="ui four column grid">
        <div className="row">
          {card}
        
        </div>
      </div>
    );
  }
}

export default BotCollection;
