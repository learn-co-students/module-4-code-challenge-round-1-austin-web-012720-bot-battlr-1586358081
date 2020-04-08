import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends Component {
  state = {
    botCollection: [],
    yourBotCollection: []
  }
  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(r=>r.json())
    .then(botData=>{
      
      this.setState({botCollection: botData})
    })
  }
  addBot = bot =>{
    if (this.state.yourBotCollection.some(i=> i.name=== bot.name)){
      alert("Already have bot in Collection")
    } else if (this.state.yourBotCollection.length === 6){
      alert('Max Bots achieved!')
    }
    else {
    this.setState({yourBotCollection: [...this.state.yourBotCollection, bot]})
  }
  }
  removeBot = bot =>{
    const index = this.state.yourBotCollection.indexOf(bot);

    const newCollection = this.state.yourBotCollection.filter(i=> i.name !== bot.name)
    if (index > -1 ){
      this.setState({yourBotCollection: newCollection })
    }

  }
  deleteBot = bot => {
    const index = this.state.botCollection.indexOf(bot);

    const newCollection = this.state.botCollection.filter(i=> i.name !== bot.name)
    if (index > -1 ){
      this.setState({botCollection: newCollection })
    }
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE'}).then(r=>r.json())
      .then(json =>{
        console.log(json)
        return json
      })
    }

  render() {
    return(
      <div>
        <YourBotArmy collection={this.state.yourBotCollection} removeBot={this.removeBot}/>
        <br />
        <BotCollection bots={this.state.botCollection} addToCollection={this.addBot} deleteBot={this.deleteBot}/>

      </div>
  )
  }
}

export default BotsPage;
