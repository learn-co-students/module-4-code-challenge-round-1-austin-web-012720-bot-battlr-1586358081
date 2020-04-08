import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

class BotSpecs extends React.Component {

  constructor(props) {
    super(props);
  };

  handleClick = () => {
    this.props.selectBot(this.props.bot.id)
  };

  render() {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={this.props.bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {this.props.bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {this.props.bot.catchphrase}
            </p>
            <strong>
              Class: {this.props.bot.bot_class}
              <i className={botTypeClasses[this.props.bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{this.props.bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{this.props.bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{this.props.bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log("connect this to a function that shows all bots")
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={this.handleClick}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
 };
};

export default BotSpecs;
