import React from 'react';

import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;

    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place : {this.props.player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => Meteor.call('players.decrementScore', this.props.player._id)}>-1</button>
            <button className="button button--round" onClick={() => Meteor.call('players.incrementScore', this.props.player._id)}>+1</button>
            <button className="button button--round" onClick={() => Meteor.call('players.remove', this.props.player._id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
};

