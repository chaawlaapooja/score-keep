import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

Meteor.methods({
  'player.insert': function(name, score){
    Players.insert({name,score})
  },
  'players.decrementScore' : function(_id){
    Players.update({_id},{$inc: {score: -1}} )
  },
  'players.incrementScore' : function(_id){
    Players.update({_id},{$inc: {score: 1}} )
  },
  'players.remove' : function(_id){
    Players.remove(_id)
  }
})

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if (index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    };
  });
};

