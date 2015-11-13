import React from 'react';
import Chart from './Chart';
import DataSeries from './DataSeries';


export default React.createClass({
  getDefaultProps: function() {
    return {
      width: 500,
      height: 200
    }
  },

  render: function() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={this.props.cals} width={this.props.width} height={this.props.height} color={this.props.color} />
      </Chart>
    );
  }
});
