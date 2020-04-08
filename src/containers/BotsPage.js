import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends Component {
  constructor(){
    super();
    this.state={
      bots: [],
      army: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(bots => this.setState({bots}));
}

   changeArmyStatus = (bot,location) =>{
     console.log(bot);
     if(location === "list"){
       !this.state.army.includes(bot) ?
       this.setState({army: [...this.state.army, bot]}) :
       null
     }
     else if (location === "army") {
       !this.state.army.includes(bot) ?
       null :
       this.setState({
      army: this.state.army.filter((temp) => temp.id !== bot.id)})
    }
  }




   dischargeBot = (bot) =>{
     console.log(bot.id);
     fetch('http://localhost:6001/bots/'+ bot.id,{method: 'DELETE'})
     .then(res => res.json())
     .then(json => console.log(json));
     this.setState({
       army: this.state.army.filter((temp) => temp.id !== bot.id),
       bots: this.state.bots.filter((temp) => temp.id !== bot.id)

     })
     //this.componentDidMount();

   }



    render() {
      return(
        <div>
          <YourBotArmy
            army={this.state.army}
            change={this.changeArmyStatus}
            remove={this.dischargeBot}

          />


          <BotCollection
            bots={this.state.bots}
            change={this.changeArmyStatus}
            remove={this.dischargeBot}


          />


        </div>
    );
  }
}

export default BotsPage;
