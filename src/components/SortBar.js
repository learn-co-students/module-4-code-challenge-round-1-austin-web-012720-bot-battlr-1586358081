import React, { Component } from 'react';

const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star"
};

class SortBar extends Component {

    render() {
        return (
            <div className='ui segment' name='class-type'>
                <div className="ui two column centered grid">
                    {Object.getOwnPropertyNames(botTypeClasses).map(key =>
                        <div key={key}>
                            <i className={botTypeClasses[key]} />
                            <input type="checkbox" name={key} onChange={this.props.handleFilter}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default SortBar;