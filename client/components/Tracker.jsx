import React from 'react';
import FoodBox from './food/FoodBox'
import ExerciseBox from './exercise/ExerciseBox'

export default React.createClass({
  getInitialState() {
    return {totalCals: 0};
  },
  burnedCals(cals) {
    let tCals = this.state.totalCals;
    tCals = tCals -cals;
    this.setState({totalCals: tCals});
  },
  eatenCals(cals) {
    let tCals = this.state.totalCals;
    tCals = tCals + cals;
    this.setState({totalCals: tCals});
  },
  render() {
    return <div className='row'>
      <h1 className='text-center'>Total daily calories {this.state.totalCals}</h1>
      <div className='col-md-6'><FoodBox burnedCals={this.burnedCals} eatenCals={this.eatenCals} readFromAPI={this.props.readFromAPI} origin={this.props.origin} writeToAPI={this.props.writeToAPI} /></div>
      <div className='col-md-6'><ExerciseBox eatenCals={this.eatenCals} burnedCals={this.burnedCals} readFromAPI={this.props.readFromAPI} origin={this.props.origin} writeToAPI={this.props.writeToAPI} /></div>
    </div>;
  }
});
