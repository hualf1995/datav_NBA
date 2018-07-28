import React, { Component } from 'react';
import { DataViewContainer } from './DataViewContainer';
import { Profile } from './Profile';
import { SearchBar } from './SearchBar'
import nba from 'nba';

export class Main extends Component {
  state = {
    playerInfo: {},
  }

  componentDidMount() {
    this.loadPlayerInfo('Lebron James')
  }

  loadPlayerInfo = (playerName) => {
    nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info) => {
      const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
      console.log(playerInfo);
      this.setState({
        playerInfo: playerInfo,
      });
    });
  }

  handleSelectPlayer = (name) => {
    this.loadPlayerInfo(name);
  }

  render() {
    return (
      <div className='main'>
        <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
        <div className='player'>
          <Profile playerInfo={this.state.playerInfo}/>
          <DataViewContainer playerId={this.state.playerInfo.playerId}/>
        </div>
      </div>
    );
  }
}
