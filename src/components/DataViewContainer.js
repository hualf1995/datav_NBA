import React from 'react';
import { CountSlider } from './CountSlider';
import { ShotChart } from './ShotChart';
import { Radio, Row, Col, Switch } from 'antd';
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component{
  state = {
    minCount: 2,
    chartType: 'hexbin',
    displayToolTips: true,
  }

  onCountSliderChange = (count) => {
    this.setState({ minCount:count });
  }

  onChartTypeChange = (e) => {
    this.setState({ chartType: e.target.value });
  }

  onTooltipChange = (v) => {
    this.setState({ displayToolTips: v });
  }

  render() {
    return (
      <div className='data-view'>
        <ShotChart
          playerId={this.props.playerId}
          minCount={this.state.minCount}
          chartType={this.state.chartType}
          displayToolTips={this.state.displayToolTips}
        />
        <div className='filters'>
          {this.state.chartType === 'hexbin' ?
            <CountSlider onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}
                         minCount={this.state.minCount}
            /> : null
          }
          <Row>
            <Col span={12} offset={3}>
              <RadioGroup onChange={this.onChartTypeChange}
                          value={this.state.chartType}>
                <Radio value='hexbin'>Hexbin</Radio>
                <Radio value='scatter'>Scatter</Radio>
              </RadioGroup>
            </Col>
            <Col span={6}>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                defaultChecked
                onChange={this.onTooltipChange}
              />
            </Col>
          </Row>
        </div>
      </div>

    );
  }

}