import React, { Component } from 'react';
import { ShotChart } from './ShotChart';
import nba from 'nba';

export class Main extends Component {
  state = {
    playerId: nba.findPlayer('Lebron James').playerId,
  }
  render() {
    return (
      <div>
        <ShotChart playerId={this.state.playerId}/>
      </div>
    );
  }
}