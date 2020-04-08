import React, { Component } from "react";
import BotCard from '../components/BotCard'
class YourBotArmy extends Component {
  //your bot army code here...
  getCard =()=>{
// render the card clicked on by the user
    return this.props.collection.map((bot,key)=>{
    return   <BotCard bot={bot} key={key} removeBot={this.props.removeBot}/>
    })
  }
  // componentDidMount(){
  //   fetch('http://localhost:6001/bots',{
  //   method:'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //   },
  //   body: JSON.stringify({
  //
  //   })
  // }
  // }
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.getCard()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
