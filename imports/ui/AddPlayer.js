import React from 'react';

import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let playerName = this.refs.playerName.value;
  
    if (playerName) {
      Meteor.call('player.insert', playerName, 0, (err,res)=>{
        if(err)
          alert(err)
        else
          this.refs.playerName.value = '';
      })
    }
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" ref="playerName" name="playerName" placeholder="Player name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
};
