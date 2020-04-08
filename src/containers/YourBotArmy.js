import React, { Component } from "react";

class YourBotArmy extends Component {
// constructor(props) {
//   super(props)

// };
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {console.log(this.props)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
