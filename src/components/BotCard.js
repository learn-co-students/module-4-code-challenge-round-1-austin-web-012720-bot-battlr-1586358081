import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotCard = props => {

  const handleClickCard = (e) => {
    // prevents a bot that wasn't in the army
    // from being added when the delete button
    // is pressed.
    if(e.target.name === 'delete'){
      props.handleDeleteBot(props.bot)
    } else {
      props.handleClickCard(props.bot)
    }
  }

  // console.log(props)
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bot.id}
        onClick={handleClickCard}
      >
        <div className="image">
          <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.bot.name}
            <i className={botTypeClasses[props.bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                name="delete"
                className="ui mini red button"
                onClick={this.handleClickCard}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
