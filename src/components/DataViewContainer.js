import React from 'react';
import { CountSlider } from './CountSlider'
import { ShotChart } from './ShotChart'

export class DataViewContainer extends React.Component{

  render() {
    return (
      <div className='data-view'>
        <ShotChart playerId={this.props.playerId}/>
        <div className='filters'>
          <CountSlider />
        </div>
      </div>

    );
  }

}