import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

class BotCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      drafted: false
    };
  };
  render() {
    return (
      <div className="ui column" >
        <div
          className="ui card"
          key={this.props.bot.id}
          onClick={() => {
            this.setState({ drafted: !this.state.drafted }),
            this.state.drafted ? this.props.army.pop(this.props.bot) : this.props.army.push(this.props.bot)
          }}>
          <div className="image">
            <img alt="oh no!" src={this.props.bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {this.props.bot.name}
              <i className={botTypeClasses[this.props.bot.bot_class]} />
            </div>
            <div className="meta text-wrap">
              <small>{this.props.bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {this.props.bot.health}
            </span>

            <span>
              <i className="icon lightning" />
              {this.props.bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {this.props.bot.armor}
            </span>
            <span>
              <div className="ui center aligned segment basic">
                <button
                  className="ui mini red button"
                  onClick={() =>
                    console.log("add code to connect event listener")
                  }
                >
                  x
              </button>
              </div>
            </span>
          </div>
        </div>
      </div >
    );
  };
};

export default BotCard;
